import React from "react";
import Header from "../compenets/header/Header";
import Footer from "../compenets/Footer";
import { format } from "date-fns";
import api from "../utils/exploreAPI";
import { SearchResultData } from "../types/app";
import ListingCard from "../compenets/ListingCard";
import Map from "../compenets/Map";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const { location, startDate, endDate, numOfGuests } = params;

  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate && typeof startDate === "string" && typeof endDate === "string") {
    formatedStartDate = format(new Date(startDate), "dd MMMM yyyy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultData: SearchResultData = await api.getSearchResultData();
  console.log(searchResultData);

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main>
        <section>
          <div className="containerXL flex flex-col xl:flex-row">
            <div className="pt-14 pr-4 xl:w-3/5">
              <p className="text-xs">
                300+ Stays - {range} - for {numOfGuests} guests
              </p>
              <h1 className="text-3xl font-semibold mt-2 mb-6 ">
                Stays in {location}
              </h1>
              <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                {filters.map((filter) => (
                  <button type="button" className="filter-btn" key={filter}>
                    {filter}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-y-8">
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
            <div className="mt-8 xl:mt-14 w-full h-[400px] xl:h-auto xl:w-2/5 z-0">
              <Map searchResultData={searchResultData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}