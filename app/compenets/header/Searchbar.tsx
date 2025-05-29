import React from "react";
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="flex items-center bg-white md:shadow-sm border border-gray-300 rounded-full px-4 py-2 max-w-3xl">
      <input
        type="text"
        placeholder="Start your search"
        className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
      />
      <IoSearch className="bg-red-400 text-white rounded-full w-6 h-6 p-1" />
    </div>
  );
};

export default Searchbar;
