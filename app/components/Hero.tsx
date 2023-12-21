import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const Hero = () => {
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
              Make storing your stuff easy
            </h1>
            <p className="text-lg mb-8 text-white">
              Request a pickup, and have your things stored for you.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="Enter location"
                  className="form-input px-4 py-2 border border-r-0 border-white w-full rounded-tl-md rounded-bl-md"
                />
                <button className="border border-l-0 rounded-tr-md rounded-br-md p-2 bg-white hover:shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="w-12 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Image Content */}
        <div className="flex-1 py-10 flex items-center">
          <div className=" w-full">
            <img
              src="/images/web-dev.png"
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
