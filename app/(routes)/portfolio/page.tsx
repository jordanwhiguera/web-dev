"use client";
import HeroTwo from "@/app/components/HeroTwo";
import Overlay from "@/app/components/Overlay";
import React from "react";

const PortfolioPage = () => {
  return (
    <>
      <Overlay
        imageSrc="/images/forest.webp"
        imageAlt="man looking at phone"
        text="Portfolio"
      />
      <HeroTwo
        title="My work"
        subtitle="Stowbase is an online marketplace that connects people looking to store their belongings with people with unused space. Think of it as the Airbnb for storage."
        image="/images/girl-laptop.webp"
        padRight
        button
      />
    </>
  );
};
export default PortfolioPage;
