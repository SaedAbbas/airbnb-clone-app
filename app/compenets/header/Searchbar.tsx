"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";

const Searchbar = () => {
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
          placeholder="Start your search"
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
        />
        <IoSearch className="bg-red-400 text-white rounded-full w-6 h-6 p-1" />
      </div>
      {inputValue && (
        <>
          <div className="absolute top-[61px] max-md:mx-4 max-md:top-[160px] left-1/2 transform -translate-x-1/2 ">
            <DateRangePicker
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              ranges={[selectionRange]}
              className="bg-white  p-4"
              rangeColors={["#FD5B61"]}
              minDate={new Date()}
            />
            <div className="flex items-center border-t-1 justify-between bg-white p-4">
              <label htmlFor="guests" className="text-xl ml-6 text-gray-600 font-semibold">
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
                  className="w-12 text-center text-red-400 border border-gray-300 rounded-md mx-2"
                />
              </div>
            </div>
            <div className="flex items-center justify-around rounded-b-lg border-t-1 bg-white p-4">
              <button type="button" onClick={() => setInputValue("")} className="cursor-pointer bg-red-400 text-white rounded-lg py-2 px-6 font-semibold">
                Cancel
                </button>
              <Link href='/' className="bg-red-400 text-white rounded-lg py-2 px-6 font-semibold" >Search</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Searchbar;
