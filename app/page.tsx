import Image from "next/image";
import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <HeroTwo />
      <Footer />
    </>
  );
}
