import React from "react";
import MainHeading from "./MainHeading";
import api from "../utils/exploreAPI";
import { LiveData } from "../types/app";
import LiveCard from "./LiveCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Live = async () => {
  const liveData: LiveData = await api.getLiveAPI();
  console.log(liveData);
  return (
    <section className="pt-10">
      <div className="containerXL">
        <MainHeading title="Live Anywhere" />
        <Carousel>
          <CarouselContent>
            {[...liveData, ...liveData]?.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 flex-none"
              >
                <LiveCard img={item.img} title={item.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Live;
