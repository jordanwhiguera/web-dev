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
      "At Jordy Web Development & Design, I prioritize your unique needs. Serving Port St. Lucie and Treasure Coast regions, I offer personalized web development and design services tailored to your project's size and scope. With a focus on client-centric solutions, I ensure your voice is integral in every step, delivering web solutions that truly resonate with our community.",

    imageUrl: "/images/pc-people.webp", // Replace with your image path
  },
  {
    id: 2,
    title: "Hand-Coded, High-Performance Websites",
    description:
      "Specializing in custom-coded websites, I ensure superior performance, speed, and SEO. Every website is handcrafted to deliver faster load times and improved search rankings, setting your digital presence apart. Experience the impact of a visually striking, functionally robust website, fine-tuned for digital excellence.",

    imageUrl: "/images/laptop.webp", // Replace with your image path
  },
  {
    id: 3,
    title: "Optimized Responsive Design for All Devices",
    description:
      "Understanding the importance of a multi-device world, I create websites that are stunning and functional on every screen. Prioritizing responsive design, your site will provide a seamless user experience from smartphones to desktops, enhancing customer engagement and showcasing your business at its best across all platforms.",

    imageUrl: "/images/man-phone.webp", // Replace with your image path
  },
  // ... other menu items
];

const Card: React.FC = () => {
  return (
    <Container className="bg-new-side">
      <div className="py-6">
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
