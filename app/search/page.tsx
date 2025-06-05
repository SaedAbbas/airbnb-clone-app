import React from "react";
import Header from "../compenets/header/Header";
import Footer from "../compenets/Footer";
import { format } from "date-fns";

type SearchParams = {
  location?: string;
  startDate?: string;
  endDate?: string;
  numOfGuests?: string;
};


const SearchResult = ({
  searchParams: { location, startDate, endDate, numOfGuests },
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


  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />

      <div>SearchResult</div>

      <Footer />
    </>
  );
};

export default SearchResult;
