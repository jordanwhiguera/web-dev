"use client";
import React, { useState } from "react";
import Container from "./Container";
import { useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setIsDrawerOpen(false);
    router.push(path);
  };

  return (
    <>
      <nav className="fixed w-full bg-[#1e251f] text-white z-50">
        <Container className="py-3">
          <div className="flex justify-between items-center">
            <h2
              className="text-lg font-bold cursor-pointer hover:text-[#feac7c]"
              onClick={() => handleNavigation("/")}
            >
              Jordy Web Development & Design
            </h2>
            {isDrawerOpen ? (
              <IoMdClose
                size={24}
                className="cursor-pointer hover:text-[#feac7c]"
                onClick={() => setIsDrawerOpen(false)}
              />
            ) : (
              <IoMenu
                size={24}
                className="cursor-pointer hover:text-[#feac7c]"
                onClick={() => setIsDrawerOpen(true)}
              />
            )}
          </div>
        </Container>
      </nav>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#1e251f] transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 flex flex-col`}
      >
        {/* Close button */}
        <button
          className="text-white hover:text-[#feac7c] p-4 self-end"
          onClick={() => setIsDrawerOpen(false)}
        >
          Close
        </button>
        {/* Navigation Links */}
        <nav className="flex flex-col mt-8 space-y-4">
          <a
            className="text-white hover:text-[#feac7c] p-4 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            Home
          </a>
          <a
            className="text-white hover:text-[#feac7c] p-4 cursor-pointer"
            onClick={() => handleNavigation("/about")}
          >
            About
          </a>
          <a
            className="text-white hover:text-[#feac7c] p-4 cursor-pointer"
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </a>
        </nav>
      </div>
      {/* Overlay to close drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
