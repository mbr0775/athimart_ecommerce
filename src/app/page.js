"use client";

import Image from "next/image";
import Navbar from "./navbar/navbar";
import Banner from "./home/banner";
import Categories from "./Categories/Categories";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Import and use the Navbar component */}
      <Navbar />
      
      
      {/* Banner Component */}
      <Banner />
      
      {/* Categories Component */}
      <Categories />
    </div>
  );
}