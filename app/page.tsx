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

      <Feature />
      <PricingTable />
      <Footer />
    </>
  );
}
