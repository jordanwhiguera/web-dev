// AboutUsSection.tsx
import React from "react";
import Image from "next/image";
import Container from "./Container"; // Adjust the import path as necessary

const AboutUsSection: React.FC = () => {
  return (
    <div className="relative text-white text-6xl font-bold pt-[110px] pb-[58px]">
      {/* Background Image */}
      <Image
        src="/images/laptop.webp" // Replace with the path to your image
        alt="About Us Background"
        fill
        quality={100}
        className="opacity-75" // Adjust opacity as needed
        style={{ objectFit: "cover" }} // Include objectFit inside style prop
        priority // Add this property to prioritize the image
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      {/* Container for content */}
      <Container className="relative z-10 p-8">
        <h1>About Us</h1>
      </Container>
    </div>
  );
};

export default AboutUsSection;
