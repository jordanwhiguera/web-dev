import Image from "next/image";
import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroTwo />
      <Footer />
    </>
  );
}
