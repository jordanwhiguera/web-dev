import React from "react";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-content">
      <Navbar />
      <main className={inter.className}>{children}</main>
      <Footer />
    </div>
  );
}
