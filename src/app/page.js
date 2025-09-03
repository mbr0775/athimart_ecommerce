"use client";

import Image from "next/image";
import Navbar from "./navbar/navbar";
import HomeSection from "./home/homesection";
import Banner from "./home/banner";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Import and use the Navbar component */}
      <Navbar />
      
      {/* Home Section Component */}
      <HomeSection />
      
      {/* Banner Component */}
      <Banner />
    </div>
  );
}