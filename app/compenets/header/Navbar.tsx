import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center md:justify-end space-x-4 text-gray-600">
      <p className="hidden md:inline cursor-pointer text-red-400 font-semibold">Become a host</p>
      <AiOutlineGlobal className="h-6 cursor-pointer"/>
      <div className="flex space-x-2 border px-2 py-1 rounded-full">
        <IoMdMenu className="h-6" />
        <FaRegUserCircle className="h-6" />
      </div>
    </div>
  );
};

export default Navbar;
