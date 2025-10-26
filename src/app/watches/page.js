"use client";

import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Navbar from "../navbar/navbar";
import SellerDetail from "./sellerDetails";

function WatchEcommercePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <Navbar />
      <Hero />
      <Categories />
      <SellerDetail />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default WatchEcommercePage;