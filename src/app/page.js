"use client";

import Image from "next/image";
import Navbar from "./navbar/navbar";
import Categories from "./Categories/Categories";
import FeaturedItems from "./featuredItems/featuredItems";
import AnniversaryOffer from "./Offers/anniversaryOffer";
import FashionTextiles from "./ClothingFashion/FashionTextiles";
import HeroBanner from "./home/banner";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Import and use the Navbar component */}
      <Navbar />
      {/* Hero Banner Section */}
      <HeroBanner />



      {/* Featured Items Component */}
      <FeaturedItems />
    
      {/* Categories Component */}
      <Categories />


      {/* Anniversary Offer Component */}
      <AnniversaryOffer />

      {/* Fashion Textiles Component */}
      <FashionTextiles />
    </div>
  );
}