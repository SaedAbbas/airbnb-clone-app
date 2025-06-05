import Banner from "./compenets/Banner";
import Explore from "./compenets/Explore";
import GreatestOutdoor from "./compenets/GreatestOutdoor";
import Live from "./compenets/Live";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Explore />
      <Live />
      <GreatestOutdoor 
      img='/door.jpg'
      title='The Greatest Outdoor'
      description='Wishlists created by Airbnb users to inspire their next trip.'
      linkText='Get Inspired'
      />
    </div>
  );
}
