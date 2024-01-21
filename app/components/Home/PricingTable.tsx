"use client";
// PricingTable.tsx
import React from "react";
import PricingCard from "./PricingCard"; // Adjust the import path as necessary
import Container from "../Container";

import { FaHome } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";

import { Plan } from "./PricingCard";
const PricingTable: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Subscription Plan",
      price: "$110/mo",
      features: [
        "Free website hosting",
        "Unlimited edits",
        "4 pages included, +$100 per additional page",
        "Logo design included",
        "24/7 support",
      ],
      icon: FaHome, // Pass the FaHome icon here
    },
    {
      name: "Standard Plan",
      price: "$2000",
      features: [
        "$25/mo hosting",
        "Edits billed at $35/hr",
        "4 pages included, +$100 per additional page",
        "Logo design included",
        "24/7 support",
      ],
      icon: GiFamilyHouse, // And here, if you want the same icon for all plans
    },
    {
      name: "Custom Plan",
      price: "Varies",
      features: [
        "$25/mo hosting",
        "Unlimited edits or edits billed at $35/hr",
        "As many pages as you need",
        "Logo design included",
        "24/7 support",
      ],
      icon: BsFillBuildingsFill, // Repeat for each plan as needed
    },
    // ... include other plans if any
  ];

  return (
    <Container>
      <div id="pricing" className="pb-6">
        <div className="flex justify-between items-center mb-4 lg:-mb-3">
          <h2 className="text-3xl font-bold text-black border-l-8 pl-2 border-[#feac7c]">
            Pricing
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PricingTable;
