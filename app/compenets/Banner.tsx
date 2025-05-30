import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[613px]">
      <Image
        src="/banner.jpg"
        alt="Banner Image"
        fill
        priority
        className="object-cover brightness-90"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Explore the World
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Find your next adventure with us
        </p>
        <button className="bg-red-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300">
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default Banner;
