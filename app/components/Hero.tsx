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
    <Container
      className="bg-hero" // `bg-hero` will apply to screens smaller than 768px, and `bg-merge` will apply to screens 768px and larger
    >
      <div className="flex flex-col lg:flex-row min-h-screen ">
        {/* Text Content */}
        <div className="flex-1 py-12 flex flex-col justify-center">
          <div className="lg:pr-12">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Small Business Web Design + Development
            </h1>
            <p className="text-lg mb-8 text-white">
              No page builders or WordPress - We offer 100% hand-coded websites
              with superior results starting at $150/mo.
            </p>
            <Button
              smallWidth
              label="Find storage"
              onClick={() => router.push("/")}
            />
          </div>
        </div>
        {/* Image Content */}
        <div className="flex-1 py-10 flex items-center">
          <div className=" w-full">
            <img
              src="/images/new-lady-pc.png"
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
