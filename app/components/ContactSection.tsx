"use client";
import React from "react";
import Container from "./Container";

const ContactSection: React.FC = () => {
  const formEndpoint = "https://formspree.io/f/xrgngrwd";
  return (
    <Container className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold mb-4">LET'S GET IN TOUCH</h2>
          <p className="mb-6">
            If you have any question regarding your website or marketing
            strategy, we encourage you to schedule an appointment or phone
            consultation with us. We are pleased to offer all types of local
            marketing services at affordable prices for the needs of your
            business.
          </p>
          {/* Contact details and social icons */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="material-icons mr-2">location_on</span>
              Stuart, FL 34994
            </div>
            <div className="flex items-center">
              <span className="material-icons mr-2">phone</span>
              (772) 324-9551
            </div>
            <div className="flex items-center">
              <span className="material-icons mr-2">email</span>
              info@pinnaclewebmarketing.com
            </div>
          </div>
        </div>
        <div className="flex-1 bg-blue-800 p-6 rounded-lg">
          {/* Form content */}
          <h3 className="text-lg mb-4">
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
              className="p-2 rounded bg-blue-700 border border-blue-600 text-white"
              required
            />
            <input
              type="tel"
              name="phone" // Changed to type "tel" for better semantics
              placeholder="Phone Number"
              className="p-2 rounded bg-blue-700 border border-blue-600 text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-2 rounded bg-blue-700 border border-blue-600 text-white"
              required
            />

            <textarea
              name="message"
              placeholder="How can we help?"
              className="p-2 rounded bg-blue-700 border border-blue-600 text-white"
              rows={3}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 p-3 rounded hover:bg-blue-700 text-white"
            >
              SUBMIT INFORMATION
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
