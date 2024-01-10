"use client";
import Container from "./Container";
import React from "react";

interface CardItem {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

// Example data
const cardItems: CardItem[] = [
  // Add your menu items here
  {
    id: 1,
    title: "Stilton and pancetta penne",
    description:
      "A delightful mix of stilton cheese and pancetta in a creamy sauce.",
    price: "$24.00",
    imageUrl: "/images/pc-people.jpg", // Replace with your image path
  },
  {
    id: 2,
    title: "Stilton and pancetta penne",
    description:
      "A delightful mix of stilton cheese and pancetta in a creamy sauce.",
    price: "$24.00",
    imageUrl: "/images/laptop.jpg", // Replace with your image path
  },
  {
    id: 3,
    title: "Stilton and pancetta penne",
    description:
      "A delightful mix of stilton cheese and pancetta in a creamy sauce.",
    price: "$24.00",
    imageUrl: "/images/man-phone.jpg", // Replace with your image path
  },
  // ... other menu items
];

const Card: React.FC = () => {
  return (
    <Container className="bg-new-side">
      <div className="py-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-black">What I Do</h2>
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
