"use client";
import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <Container className=" py-4 bg-footer flex flex-col md:flex-row justify-between items-center text-white ">
      <div className="mb-4 md:mb-0">
        <span className="text-xs font-semibold">
          Copyright © 2024 - Jordy Web Development & Design
        </span>
      </div>
      <div className="flex space-x-4">
        {/* Social icons */}
        {/* <FaTwitter size="24" aria-label="Twitter" />
        <FaYoutube size="24" aria-label="YouTube" />
        <FaFacebook size="24" aria-label="Facebook" /> */}
      </div>
    </Container>
  );
};

export default Footer;
