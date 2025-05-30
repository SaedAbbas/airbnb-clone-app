import React from "react";
import ExploreCard from "./ExploreCard";
import exploreAPI from "../utils/exploreAPI";
import { ExploreData } from "../types/app";
import MainHeading from "./MainHeading";

const Explore = async () => {
  const exploreData: ExploreData = await exploreAPI();
  console.log(exploreData);
  return (
    <section className="pt-6">
      <div className="containerXL">
        <MainHeading title='Explore Nearby' />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {exploreData?.map((item, index) => (
            <ExploreCard
              key={index}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
