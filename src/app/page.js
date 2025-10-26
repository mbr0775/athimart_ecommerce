"use client";

import Image from "next/image";
import Navbar from "./navbar/navbar";
import VideoStoryHero from "./home/banner";
import Categories from "./Categories/Categories";
import FeaturedItems from "./featuredItems/featuredItems";
import AnniversaryOffer from "./Offers/anniversaryOffer";


export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Import and use the Navbar component */}
      <Navbar />
    
      {/* Categories Component */}
      <Categories />


      {/* Anniversary Offer Component */}
      <AnniversaryOffer />

      {/* Featured Items Component */}
      <FeaturedItems />

      {/* Video Story Hero Component */}
      <VideoStoryHero />
    </div>
  );
}