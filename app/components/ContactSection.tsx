"use client";
import React from "react";
import Container from "./Container";
import Button from "./Button";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactSection: React.FC = () => {
  const formEndpoint = "https://formspree.io/f/xrgngrwd";
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    // You might want to handle the submit function here if needed
  };
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 my-4">
        <div className="flex-1 bg-[#445044]  rounded-lg w-full min-h-full">
          {/* Form content */}
          <div className="p-6">
            <h3 className="text-lg mb-4 text-white font-bold">
              Fill out this quick form to request a free consultation!
            </h3>
            <form
              action={formEndpoint}
              method="POST"
              className="flex flex-col space-y-3"
            >
              <input
                type="text"
                name="name" // The 'name' attributes are important for Formspree to identify the form fields
                placeholder="Name"
                className="p-2 rounded bg-[#1e251f]  text-white"
                required
              />
              <input
                type="tel"
                name="phone" // Changed to type "tel" for better semantics
                placeholder="Phone Number"
                className="p-2 rounded bg-[#1e251f]  text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="p-2 rounded bg-[#1e251f]  text-white"
                required
              />

              <textarea
                name="message"
                placeholder="How can we help?"
                className="p-2 rounded bg-[#1e251f] text-white"
                rows={10}
                required
              ></textarea>

              <Button label="Submit Information" onClick={handleSubmit} />
            </form>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div className="md:pl-24">
            <h2 className="text-5xl font-bold mb-4 text-black">
              LET'S GET IN TOUCH
            </h2>
            <p className="mb-6 text-black">
              If you have any question regarding your website or marketing
              strategy, we encourage you to schedule an appointment or phone
              consultation with us. We are pleased to offer all types of local
              marketing services at affordable prices for the needs of your
              business.
            </p>
            {/* Contact details and social icons */}
            <div className="space-y-4">
              <div className="flex items-center text-black">
                <span className=" mr-2 text-black p-2 bg-[#445044] rounded-full">
                  <FaMapMarkerAlt className="text-white" />
                </span>
                Port Saint Lucie, FL
              </div>
              <div className="flex items-center text-black">
                <span className=" mr-2 text-black p-2 bg-[#445044] rounded-full">
                  <FaPhoneAlt className="text-white" />
                </span>
                (772) 607-0620
              </div>
              <div className="flex items-center text-black">
                <span className=" mr-2 text-black p-2 bg-[#445044] rounded-full">
                  <MdEmail className="text-white" />
                </span>
                jordanwhiguera@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
