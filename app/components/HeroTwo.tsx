"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  reverse?: boolean;
  blackBackground?: boolean;
  textWhite?: boolean;
  reOrder?: boolean;
  button?: boolean;
  padRight?: boolean;
}

const HeroTwo: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  reverse,
  blackBackground,
  textWhite,
  reOrder,
  button,
  padRight,
}) => {
  const router = useRouter();
  return (
    <div
      // Can remove lg:py-16 as needed
      className={` mx-auto py-4 lg:py-10 xl:px-20 md:px-10 sm:px-2 px-4 ${
        blackBackground ? "bg-[#f3d4b7]" : "bg-white"
      } `}
    >
      <div
        className={`flex ${
          reverse ? "flex-col-reverse" : "flex-col"
        } lg:flex-row `}
      >
        {/* Conditionally render image first if reOrder is true */}
        {reOrder && image && (
          <div className="flex-1  flex items-center">
            <div className=" w-full">
              <img
                src={image}
                alt="Hero Image"
                className="w-full h-full  object-cover"
              />
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="flex-1   flex flex-col justify-center">
          <div className={`${padRight ? "lg:pr-24" : "lg:pl-24"}`}>
            <h1
              className={`text-4xl font-bold mb-6 ${
                textWhite ? "text-white" : "text-black"
              }`}
            >
              {title}
            </h1>
            <p
              className={`text-lg mb-8 ${
                textWhite ? "text-white" : "text-black"
              }`}
            >
              {subtitle}
            </p>

            {/* Button */}
            {button && (
              <Button
                smallWidth
                label="Contact me"
                onClick={() => router.push("/contact")}
              />
            )}
          </div>
        </div>

        {/* Conditionally render image second if reOrder is false or not provided */}

        {!reOrder && image && (
          <div className=" flex-1 mt-8 lg:mt-0 flex items-center">
            <div className=" w-full">
              <img
                src={image}
                alt="Hero Image"
                className="w-full h-full  object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroTwo;
