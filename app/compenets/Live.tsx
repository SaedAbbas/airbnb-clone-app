import React from "react";
import MainHeading from "./MainHeading";
import api from '../utils/exploreAPI'
import { LiveData } from "../types/app";
import LiveCard from "./LiveCard";

const Live = async() => {

  const liveData:LiveData = await api.getLiveAPI()
  console.log(liveData)
  return (
    <section className="pt-10">
      <div className="containerXL">
        <MainHeading title="Live Anywhere" />
        <div className="flex space-x-3 overflow-scroll no-scrollbar">
          {liveData?.map((item, index) => (
           <LiveCard
              key={index}
              img={item.img}
              title={item.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Live;
