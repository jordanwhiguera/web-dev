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
    imageUrl: "/path-to-your-image.jpg", // Replace with your image path
  },
  {
    id: 1,
    title: "Stilton and pancetta penne",
    description:
      "A delightful mix of stilton cheese and pancetta in a creamy sauce.",
    price: "$24.00",
    imageUrl: "/path-to-your-image.jpg", // Replace with your image path
  },
  {
    id: 1,
    title: "Stilton and pancetta penne",
    description:
      "A delightful mix of stilton cheese and pancetta in a creamy sauce.",
    price: "$24.00",
    imageUrl: "/path-to-your-image.jpg", // Replace with your image path
  },

  // ... other menu items
];

const Card: React.FC = () => {
  return (
    <Container className="bg-side">
      <div className="flex flex-col items-center ">
        {" "}
        {/* Centered vertically and horizontally */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Favorite Menu</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {" "}
          {/* 3 columns on lg screens */}
          {cardItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              style={{ maxWidth: "300px" }} // Optionally control the maximum width of the cards
            >
              <img
                className="w-full h-48 object-cover"
                src={item.imageUrl}
                alt={item.title}
              />
              <div className="p-4 text-center">
                {" "}
                {/* Centered text */}
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                <div className="mt-4">
                  <span className="text-orange-500 font-bold">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Card;
