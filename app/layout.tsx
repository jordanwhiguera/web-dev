import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Jordy Web Development & Design | Freelance Web Design in Port Saint Lucie, Florida",
  description:
    "Jordy Web Development & Design is a freelance web developer and designer who helps small businesses grow using professional design and development in Port Saint Lucie, FL and surrounding areas.",
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
