import Image from "next/image";
import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Home/Card";
import PricingSection from "./components/Home/Feature";
// import ContactSection from "./components/ContactSection";
import PricingTable from "./components/Home/PricingTable";
import Feature from "./components/Home/Feature";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Card />

      {/* <HeroTwo
        title="My Portfolio"
        subtitle=" Stowbase is an online marketplace that connects people looking to store their belongings with people with unused space."
        image="/images/new-multi-web.png"
        reverse
        reOrder
        button
      />
      <HeroTwo
        title="Who Am I?"
        subtitle="My name is Ryan, I am a stay at home dad and web developer. I started this business to help provide for the family while still being able to be home and raise the kids."
        image="/images/me.png"
        padRight
        button
        blackBackground
      /> */}

      {/* <ContactSection /> */}
      <Feature />
      <PricingTable />
      <Footer />
    </>
  );
}
