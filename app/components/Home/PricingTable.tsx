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
      price: "$100/mo",
      features: ["Free website hosting", "Unlimited edits", "24/7 support"],
      icon: FaHome, // Pass the FaHome icon here
    },
    {
      name: "Standard Plan",
      price: "$2500",
      features: ["$30/mo hosting", "Edits billed at $30/hr", "24/7 support"],
      icon: GiFamilyHouse, // And here, if you want the same icon for all plans
    },
    {
      name: "Ultimate Plan",
      price: "$2500",
      features: ["$70/mo hosting", "Unlimited edits", "24/7 support"],
      icon: BsFillBuildingsFill, // Repeat for each plan as needed
    },
    // ... include other plans if any
  ];

  return (
    <Container>
      <div
        id="pricing"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4"
      >
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </Container>
  );
};

export default PricingTable;
