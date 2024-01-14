import React from "react";
import ContactSection from "@/app/components/Contact/ContactSection";
import Overlay from "@/app/components/Overlay";
import { Toaster } from "react-hot-toast";

const ContactPage = () => {
  return (
    <>
      <Toaster />
      <Overlay
        imageSrc="/images/man-phone.webp"
        imageAlt="man looking at phone"
        text="Contact"
      />
      <ContactSection />
    </>
  );
};

export default ContactPage;
