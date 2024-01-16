"use client";
import HeroTwo from "@/app/components/HeroTwo";
import Overlay from "@/app/components/Overlay";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Overlay
        imageSrc="/images/forest.webp"
        imageAlt="man looking at phone"
        text="About"
      />
      <HeroTwo
        title="Who am I?"
        subtitle="Hi, my name is Jordan Higuera. I am a web developer. I graduated from the Univeristy of Florida in 2020 with a degree in mathematics. Since then, I have taught myself to code. I hope I can help your buisness grow through my beautiful and optimized websites."
        image="/images/me.webp"
        padRight
        button
      />
    </>
  );
};

export default AboutPage;
