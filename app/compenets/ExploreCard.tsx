'use client';
import React, { useState } from "react";
import { ExploreItem } from "../types/app";
import Image from "next/image";

type ExploreCardProps = ExploreItem;

const ExploreCard = ({ img, location, distance }: ExploreCardProps) => {
  const [imageSrc, setImageSrc] = useState(img);

  return (
    <div className="flex items-center rounded-2xl space-x-4 mt-5 cursor-pointer hover:bg-gray-100 transition duration-200 ease-out">
      <div className="relative w-24 h-24 ">
        <Image
          src={imageSrc}
          className="rounded-2xl"
          alt="card Image"
          fill
          priority
          onError={() => setImageSrc("/banner.jpg")} // الصورة البديلة
        />
      </div>
      <div className="flex flex-col">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default ExploreCard;
