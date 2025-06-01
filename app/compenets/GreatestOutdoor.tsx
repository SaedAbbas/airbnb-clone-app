import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type GreatestOutdoorProps ={
    img: string;
    title: string;
    description: string;
    linkText: string;
}

const GreatestOutdoor = ({img, title, description, linkText}:GreatestOutdoorProps) => {
  return (
    <div>
      <div className="containerXL relative pt-10">
        <div className="relative h-96 brightness-90">
         <Image
          src={img}
          fill
          priority
          alt="Greatest Outdoor"
          className="object-cover rounded-2xl"
        />
       </div>

      <div className="p-5 absolute top-1/2 transform -translate-y-1/2 text-center">
        <h2 className="text-3xl text-black font-bold mt-4">{title}</h2>
        <p className="text- mt-2">{description}</p>
        <Link href="/" className="text-white bg-black px-4 py-2 rounded-full mt-4 inline-block hover:bg-gray-800 transition duration-300">
          {linkText}
        </Link>
      </div>
      </div>
    </div>
  );
}

export default GreatestOutdoor
