"use client";
import React from "react";
import Container from "./Container";

const Feature: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="flex items-center">
      <span className="text-green-500 mr-2">✔</span>
      <div>
        <h4 className="font-bold text-black">{title}</h4>
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
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        {" "}
        {/* Adjust space and layout for md screens */}
        <div className="md:w-1/2">
          {" "}
          {/* Take up half the width on medium screens */}
          <h2 className="text-3xl font-bold text-black">
            $0 Down, $150 Per Month,
          </h2>
          <p className="text-xl text-black">12 Month Minimum Contract</p>
          <p className="mt-4 text-gray-700">
            $0 down for a standard 5 page small business website. If you need
            more than that then we have to do custom pricing based on the scope
            of work, number of additional pages, and time involved.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Features components here */}
            <Feature
              title="Hosting Fees Included"
              description="Hosting fees are built right into the monthly payment."
            />
            <Feature
              title="Unlimited Edits"
              description="Change anything you want at anytime and it will be done that day."
            />
            <Feature
              title="24/7 Customer Service"
              description="Call direct anytime day or night, no phone trees or automated responses."
            />
            <Feature
              title="Web Design & Development"
              description="Includes over 40 hours of design, development, and testing."
            />
            <Feature
              title="100 Google Page Speed Score"
              description="We can achieve a perfect 100 on Google Page Speed scores and boost your search ranking."
            />
            <Feature
              title="Google Analytics"
              description="We install Analytics for free to monitor traffic and where it comes from."
            />
          </div>
        </div>
        <div className="md:w-1/2">
          {" "}
          {/* Take up half the width on medium screens */}
          <img
            src="/images/lady-pc.png" // Replace with your actual image path
            alt="Savings illustration"
            className="w-full h-auto" // Added rounded-lg and shadow-lg for styling
          />
        </div>
      </div>
    </Container>
  );
};

export default PricingSection;
