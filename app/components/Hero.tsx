"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    //HERO SECTION PART 1
    //Container div
    <Container className="bg-hero">
      {/* Need id ="home" for scrolling... Handled by Navbar */}
      <div id="home" className="flex flex-col lg:flex-row min-h-screen">
        {/* Text Content */}
        <div className="flex-1 py-12 flex flex-col justify-center">
          <div className="lg:pr-12">
            <h1 className="text-5xl font-bold mb-6 text-white mt-24 lg:mt-0">
              Small Business Website Development & Design
            </h1>
            <p className="text-lg mb-8 text-white">
              No page builders or WordPress. Your business website will be
              expertly hand-coded by me, ensuring exceptional quality and
              performance, all at an affordable rate of just $100/mo.
            </p>
            <Button
              smallWidth
              label="Contact me"
              onClick={() => router.push("/contact")}
            />
          </div>
        </div>
        {/* Image Content */}
        <div className="flex-1 pb-10 lg:py-10 flex items-center">
          <div className=" w-full">
            <img
              src="/images/new-lady-pc.webp"
              alt="Hero Image"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
