import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Jordy Web Development & Design | Freelance Web Developer in Port Saint Lucie, Florida",
  description:
    "Website Development & Design for Small Businesses in Port Saint Lucie, Florida and the Treasure Coast. Specializing in custom websites that allign with your business goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
