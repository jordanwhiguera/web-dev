"use client";
import Container from "../Container";
import React from "react";

interface CardItem {
  id: number;
  title: string;
  description: string;

  imageUrl: string;
}

// Example data
const cardItems: CardItem[] = [
  // Add your menu items here
  {
    id: 1,
    title: "Personalized Web Development Experience",
    description:
      "At Jordy Web Development & Design, your unique needs are my focus. I offer custom web development and design services in Port St. Lucie and the Treasure Coast, ensuring a personalized approach for every project.",

    imageUrl: "/images/zoom-call.webp", // Replace with your image path
  },
  {
    id: 2,
    title: "Hand-Coded, High-Performance Websites",
    description:
      "I specialize in hand-coding websites to ensure top-notch performance and enhanced SEO. Each site is crafted to provide faster load times and a distinct digital presence.",

    imageUrl: "/images/people-zoom.webp", // Replace with your image path
  },
  {
    id: 3,
    title: "Optimized Responsive Design for All Devices",
    description:
      "In today's multi-device world, I create websites that look great and function seamlessly on all screens. Responsive design is a priority, ensuring a superb user experience across smartphones, tablets, and desktops.",

    imageUrl: "/images/lady-browse.webp", // Replace with your image path
  },
  // ... other menu items
];

const Card: React.FC = () => {
  return (
    <Container className="bg-new-side">
      <div className="pt-6 pb-10 lg:pb-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-black border-l-8 pl-2 border-[#feac7c]">
            Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardItems.map((item) => (
            <div key={item.id} className="bg-white shadow-2xl  overflow-hidden">
              <img
                className="w-full h-96 object-cover"
                src={item.imageUrl}
                alt={item.title}
              />
              <div className="p-4">
                <h3 className="text-lg text-black font-semibold">
                  {item.title}
                </h3>
                <p className="text-black">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Card;
