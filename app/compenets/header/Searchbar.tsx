"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";

const Searchbar = ({ placeholder }: { placeholder?: string }) => {
  const [inputValue, setInputValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  return (
    <>
      <div className="flex items-center bg-white md:shadow-sm border border-gray-300 rounded-full px-4 py-2 max-w-3xl">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder || "Start your search"}
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
        />
        <IoSearch className="bg-red-400 text-white rounded-full w-6 h-6 p-1" />
      </div>
    {inputValue && (
  <div className="absolute box-border mx-auto left-1/2 top-[61px] max-md:top-[160px] w-[90vw] max-w-[550px] -translate-x-1/2">
    <DateRangePicker
      onChange={handleSelect}
      moveRangeOnFirstSelection={false}
      ranges={[selectionRange]}
      className="bg-white p-4 w-full"
      rangeColors={["#FD5B61"]}
      minDate={new Date()}
    />
    <div className="flex flex-col sm:flex-row items-center justify-between border-t bg-white p-4 gap-y-3 sm:gap-y-0">
      <label
        htmlFor="guests"
        className="text-lg sm:text-xl text-gray-600 font-semibold"
      >
        Number of Guests
      </label>
      <div className="flex items-center gap-x-2">
        <FaUserAlt className="text-red-400" />
        <input
          type="number"
          min={1}
          defaultValue={1}
          value={numOfGuests}
          onChange={(e) => setNumOfGuests(Number(e.target.value))}
          className="w-16 text-center text-red-400 border border-gray-300 rounded-md"
        />
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 border-t rounded-b-lg gap-4 sm:gap-0">
      <button
        type="button"
        onClick={() => setInputValue("")}
        className="w-full sm:w-auto cursor-pointer bg-red-400 text-white rounded-lg py-2 px-6 font-semibold text-center"
      >
        Cancel
      </button>
      <Link
        href={{
          pathname: "/search",
          query: {
            location: inputValue,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            numOfGuests: numOfGuests.toString(),
          }
        }}
        onClick={() => setInputValue("")}
        className="w-full sm:w-auto text-center bg-red-400 text-white rounded-lg py-2 px-6 font-semibold"
      >
        Search
      </Link>
    </div>
  </div>
)}

    </>
  );
};

export default Searchbar;
