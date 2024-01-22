"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Container from "../Container";

const Feature: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="flex">
      <div>
        <FaCheck className="text-[#feac7c] mr-2" size={20} />
      </div>

      <div>
        <h3 className="font-bold text-black">{title}</h3>
        <p className="text-sm text-black">{description}</p>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <Container>
      {" "}
      {/* Assuming bg-white is the desired background */}
      <div className="pb-10 lg:pb-20 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        {" "}
        {/* Image Content */}
        <div className="md:w-1/3 flex justify-center md:justify-start ">
          {" "}
          {/* Take up half the width on medium screens */}
          <img
            src="/images/lady-bulb.webp" // Replace with your actual image path
            alt="Savings illustration"
            className="w-1/2 md:w-2/3" // Added rounded-lg and shadow-lg for styling
          />
        </div>
        {/* Text Content */}
        {/* Adjust space and layout for md screens */}
        <div className="md:w-2/3">
          {" "}
          {/* Take up half the width on medium screens */}
          <h2 className="text-3xl font-bold text-black border-l-8 pl-2 border-[#feac7c]">
            Subscription Plan
          </h2>
          <p className="text-xl text-black">12 Month Minimum Contract</p>
          <p className="mt-4 text-black">
            Understanding the financial considerations of small businesses, I
            provide a budget-friendly option: a standard 4-page website without
            any initial charges. Should your needs extend beyond this, like
            additional pages or intricate features, I offer customized pricing
            that aligns with the project&apos;s scale, complexity, and page
            count.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Features components here */}
            <Feature
              title="Hosting Fees Included"
              description="The monthly payment covers hosting fees and SSL certificate."
            />
            <Feature
              title="Unlimited Edits"
              description="Reach out anytime to make changes to your website."
            />
            <Feature
              title="24/7 Customer Service"
              description="My personal phone number is available for any questions or concerns."
            />
            <Feature
              title="Web Design & Development"
              description="Includes over 40 hours of design, development, and testing."
            />
            <Feature
              title="Fast Website Speeds"
              description="I can help you achieve fast Google Page Speed scores and boost your search ranking."
            />
            <Feature
              title="Search Engine Updates"
              description="Your website will stay up to date with Google's search guidelines for ranking."
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PricingSection;
