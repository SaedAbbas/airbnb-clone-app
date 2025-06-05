import Banner from "./compenets/Banner";
import Explore from "./compenets/Explore";
import Footer from "./compenets/Footer";
import GreatestOutdoor from "./compenets/GreatestOutdoor";
import Header from "./compenets/header/Header";
import Live from "./compenets/Live";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Banner />
        <Explore />
        <Live />
        <GreatestOutdoor
          img="/door.jpg"
          title="The Greatest Outdoor"
          description="Wishlists created by Airbnb users to inspire their next trip."
          linkText="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
}
