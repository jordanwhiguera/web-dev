import React from "react";
import ContactSection from "@/app/components/ContactSection";
import AboutUsSection from "@/app/components/Overlay";
import { Toaster } from "react-hot-toast";

const ContactPage = () => {
  return (
    <>
      <Toaster />
      <AboutUsSection />
      <ContactSection />
    </>
  );
};

export default ContactPage;
