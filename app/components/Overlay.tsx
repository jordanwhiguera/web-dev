// AboutUsSection.tsx
import React from "react";
import Image from "next/image";
import Container from "./Container"; // Adjust the import path as necessary

interface OverlayProps {
  imageSrc: string; // Prop for image source
  imageAlt: string; // Prop for image alternative text
  text: string; // Prop for text content
}

const Overlay: React.FC<OverlayProps> = ({ imageSrc, imageAlt, text }) => {
  return (
    <div className="relative text-white text-6xl font-bold pt-[110px] pb-[58px]">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        quality={100}
        className="opacity-75"
        style={{ objectFit: "cover" }}
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      {/* Container for content */}
      <Container className="relative z-10 p-8">
        <h1>{text}</h1>
      </Container>
    </div>
  );
};

export default Overlay;
