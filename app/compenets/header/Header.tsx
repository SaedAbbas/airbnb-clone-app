import Image from "next/image";
import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-5 sticky top-0 z-50">
      <div className="containerXL relative grid grid-cols-3 max-md:grid-cols-1 gap-y-4 ">
        <Link href="/" className="relative flex items-center h-10 my-auto max-md:justify-center">
          <Image
            src="/Airbnb-Logo.png"
            alt="Logo"
            width={200}
            height={100}
            className="object-contain object-left"
            priority
          />
        </Link>
        <Searchbar  />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
