"use client";
import HeroTwo from "@/app/components/HeroTwo";
import Overlay from "@/app/components/Overlay";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Overlay
        imageSrc="/images/man-phone.webp"
        imageAlt="man looking at phone"
        text="About"
      />
      <HeroTwo
        title="Who Am I"
        subtitle="My name is Ryan, I am a stay at home dad and web developer. I started this business to help provide for the family while still being able to be home and raise the kids. I spent a year and a half teaching myself the right way to make websites and learning to write the code myself. Now after being in business professionally for over 5 years I have built hundreds websites and have my method"
        image="/images/laptop.webp"
      />
    </>
  );
};

export default AboutPage;
