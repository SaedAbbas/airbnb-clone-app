import React from "react";
import { LiveItem } from "../types/app";
import Image from "next/image";

type LiveCardProps = LiveItem;

const LiveCard = ({ img, title }: LiveCardProps) => {
  return (
    <div className="cursor-pointer hover:scale-102 transition duration-200 ease-out ">
      <div className="relative w-80 h-80 ">
        <Image
          src={img}
          className="rounded-2xl"
          alt="card Image"
          fill
          priority
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default LiveCard;
