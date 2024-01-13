"use client";
import React from "react";
import Container from "../Container";
import Button from "../Button";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
const ContactSection: React.FC = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Form successfully submitted");
        toast.success("Form successfully submitted.");
        // Handle successful submission (e.g., redirect or show success message)
        form.reset(); // Reset the form fields
      } else {
        console.error("Form submission error");
        toast.error("Something went wrong.");
        // Handle submission error
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Something went wrong.");
      // Handle network error
    }
  };

  return (
    <Container className="">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 py-20">
        {/* Text */}
        <div className="flex-1 space-y-4">
          <div className="md:pr-24">
            <h2 className="text-5xl font-bold mb-4 text-black">GET IN TOUCH</h2>
            <p className="mb-6 text-black">
              If you have any question regarding your website strategy, we
              encourage you to schedule an appointment or phone consultation
              with us. We are pleased to offer all types of local marketing
              services at affordable prices for the needs of your business.
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
        <div className="flex-1 bg-[#445044]   w-full min-h-full">
          {/* Form content */}
          <div className="p-6 relative">
            {/* Background styling circles */}
            {/* <div className=" absolute z-10 w-40 h-40 bg-[#feac7c] rounded-full -right-28 -top-40"></div>
            <div className=" absolute -z-10 w-40 h-40 bg-[#feac7c] rounded-full -left-28 -bottom-28"></div> */}

            <h3 className="text-lg mb-4 text-white font-bold">
              Fill out this quick form to request a free consultation!
            </h3>
            <form
              method="POST"
              className="flex flex-col space-y-3"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name" // The 'name' attributes are important for Formspree to identify the form fields
                placeholder="Name"
                className="p-2  bg-[#1e251f]  text-white"
                required
              />
              <input
                type="tel"
                name="phone" // Changed to type "tel" for better semantics
                placeholder="Phone Number"
                className="p-2  bg-[#1e251f]  text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="p-2  bg-[#1e251f]  text-white"
                required
              />

              <textarea
                name="message"
                placeholder="How can we help?"
                className="p-2  bg-[#1e251f] text-white"
                rows={10}
                required
              ></textarea>

              <Button label="Submit Information" />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
