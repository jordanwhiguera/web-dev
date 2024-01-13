"use client";
// PricingTable.tsx
import React from "react";
import PricingCard from "./PricingCard"; // Adjust the import path as necessary
import Container from "../Container";

import { FaHome } from "react-icons/fa";

import { Plan } from "./PricingCard";
const PricingTable: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Standard Plan",
      price: "$2500",
      features: [
        "interior design",
        "refurbishment",
        "material supply",
        "maintenance",
        "24/7 support",
      ],
      icon: FaHome, // Pass the FaHome icon here
    },
    {
      name: "Subscription Plan",
      price: "$150/mo",
      features: [
        "advanced interior design",
        "complete refurbishment",
        "premium material supply",
        "extended maintenance",
        "priority 24/7 support",
      ],
      icon: FaHome, // And here, if you want the same icon for all plans
    },
    {
      name: "Ultimate Plan",
      price: "$1500/mo",
      features: [
        "luxury interior design",
        "full refurbishment",
        "exclusive material supply",
        "comprehensive maintenance",
        "dedicated 24/7 support",
      ],
      icon: FaHome, // Repeat for each plan as needed
    },
    // ... include other plans if any
  ];

  return (
    <Container>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </Container>
  );
};

export default PricingTable;
