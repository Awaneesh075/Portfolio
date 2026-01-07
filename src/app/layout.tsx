import "./global.css";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Awaneesh Chaturvedi | Software Developer",
  description:
    "Software Developer specializing in frontend, scalable systems, and AI-powered applications.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
