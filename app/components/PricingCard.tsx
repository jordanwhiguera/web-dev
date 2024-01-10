"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa";

export interface Plan {
  name: string;
  price: string;
  features: string[];
  icon: IconType; // This matches the type of icons from react-icons
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const router = useRouter();
  const IconComponent = plan.icon;
  return (
    <div className="bg-white shadow-2xl overflow-hidden rounded-lg flex flex-col items-center my-8">
      <div className="p-4 flex flex-col items-center">
        {IconComponent && (
          <div className="bg-[#445044] p-4 rounded-full my-4 inline-block">
            <IconComponent size={32} className="text-white" />
          </div>
        )}
        <div className="font-bold text-xl mb-2 text-black">{plan.name}</div>
        <p className="text-black text-4xl mb-4 font-bold">{plan.price}</p>
        <div className="w-full px-4 mb-2">
          {plan.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-gray-600 text-sm mb-2"
            >
              <span className=" mr-2 text-black p-1 bg-[#445044] rounded-full">
                <FaCheck className="text-white " size={10} />
              </span>

              <p className="flex-grow">{feature}</p>
            </div>
          ))}
        </div>
        <Button
          smallWidth
          label="Find storage"
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default PricingCard;
