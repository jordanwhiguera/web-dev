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
        title="My work"
        subtitle="Stowbase is an online marketplace that connects people looking to store their belongings with people with unused space. Think of it as the Airbnb for storage."
        image="/images/laptop.webp"
        padRight
        button
      /> */}
      {/* <HeroTwo
        title="Who am I?"
        subtitle="Hi, my name is Jordan Higuera. I am a web developer. I graduated from the Univeristy of Florida in 2020 with a degree in mathematics. Since then, I have taught myself to code. I hope I can help your buisness grow through my beautiful and optimized websites."
        image="/images/laptop.webp"
        padRight
        button
      /> */}

      <Feature />
      <PricingTable />
      <Footer />
    </>
  );
}
