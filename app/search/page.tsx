import React from "react";
import Header from "../compenets/header/Header";
import Footer from "../compenets/Footer";
import { format } from "date-fns";
import api from "../utils/exploreAPI";
import { SearchResultData } from "../types/app";
import ListingCard from "../compenets/ListingCard";
import Map from "../compenets/Map";

type SearchParams = {
  location?: string;
  startDate?: string;
  endDate?: string;
  numOfGuests?: string;
};


const SearchResult = async({
  searchParams: { location, startDate, endDate, numOfGuests }
}: {
  searchParams: SearchParams;
}) => {

  let formatedStartDate;
  let formatedEndDate ;
  if (startDate && endDate) {

    formatedStartDate = format(new Date(startDate), 'dd MMMM yyyy');
    formatedEndDate = format(new Date(endDate), 'dd MMMM yyyy');
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  //toISOString() هاي لما بدك تزبط التاريخ لل url بحيث يكون شكله مزبوط فال
  //اما بالنسبة للفورمات بتزبطلي التاريخ بدل مهو كبير كتير بتخليه عشكل  dd MMMM yyyy

  const filters = [
    'Cancellation Flexibility',
    'Type of Place',
    'Price',
    'Rooms and Beds',
    'More filters',
  ];

  const searchResultData:SearchResultData = await api.getSearchResultData()
  console.log(searchResultData)


  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main>
        <section>
          <div className='containerXL flex'>
            <div className='pt-14 pr-4'>
              <p className='text-xs'>
                300+ Stays - {range} - for {numOfGuests} guests
              </p>
              <h1 className='text-3xl font-semibold mt-2 mb-6 '>
                Stays in {location}
              </h1>
              <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                {filters.map((filter) => (
                  <button type='button' className='filter-btn' key={filter}>
                    {filter}
                  </button>
                ))}
              </div>
              <div>
                {searchResultData.map((listing) => (
                  <ListingCard
                    key={listing.title}
                    img={listing.img}
                    title={listing.title}
                    location={listing.location}
                    description={listing.description}
                    price={listing.price}
                    total={listing.total}
                    star={listing.star}
                  />
                ))}
              </div>
            </div>
            <div className='hidden xl:inline-flex xl:min-w-[600px]'>
              <Map searchResultData={searchResultData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
