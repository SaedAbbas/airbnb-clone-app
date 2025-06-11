'use client'
import React from 'react'
import { ListingCardItem } from '../types/app'
import Image from 'next/image'
import { FaRegHeart, FaStar } from "react-icons/fa6";

type ListingCardProps = Omit<ListingCardItem, 'long' | 'lat' >

const ListingCard = ({ title, description, img, total, price, star, location }: ListingCardProps) => {
  const [image, setImage] = React.useState(img);

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 py-4 px-3 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      {/* الصورة */}
      <div className="relative h-60 w-full md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={image}
          fill
          className="rounded-2xl object-cover"
          alt="Listing-Card"
          onError={() => setImage('/room.jpg')}
        />
      </div>

      {/* التفاصيل */}
      <div className="flex flex-col justify-between flex-grow">
        <div className="flex items-start justify-between">
          <p className="text-sm text-gray-600">{location}</p>
          <FaRegHeart className="h-6 w-6 text-gray-600 hover:text-red-400 transition" />
        </div>

        <h4 className="text-xl font-semibold mt-1">{title}</h4>
        <div className="border-b w-10 my-2" />

        <p className="text-gray-500 text-sm flex-grow">{description}</p>

        <div className="flex items-end justify-between pt-4">
          <p className="flex items-center text-sm text-gray-600">
            <FaStar className="h-4 w-4 text-red-400 mr-1" />
            {star}
          </p>
          <div className="text-right">
            <p className="text-lg font-semibold">{price}</p>
            <p className="text-sm text-gray-400">{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard
