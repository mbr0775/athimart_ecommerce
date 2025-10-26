"use client";

import React, { useState, useEffect } from "react";

function Categories() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    {
      name: "Luxury Watches",
      count: 45,
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=400&q=80",
    },
    {
      name: "Smart Watches",
      count: 32,
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
    },
    {
      name: "Sports Watches",
      count: 28,
      image: "https://images.unsplash.com/photo-1588012886689-f6d0a59a9411?w=400&q=80",
    },
    {
      name: "Dress Watches",
      count: 38,
      image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&q=80",
    },
  ];

  return (
    <section
      id="categories"
      style={{ padding: isMobile ? "60px 0" : "100px 0", background: "#f9f9f9" }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 60px" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? "40px" : "60px" }}>
          <h2
            style={{
              fontSize: isMobile ? "1.8rem" : "2.5rem",
              fontWeight: "300",
              color: "#000",
              marginBottom: "15px",
              letterSpacing: "1px",
            }}
          >
            Watch Categories
          </h2>
          <p style={{ fontSize: isMobile ? "0.9rem" : "1rem", color: "#666", fontWeight: "300" }}>
            Explore our diverse collection of timepieces
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(250px, 1fr))",
            gap: isMobile ? "15px" : "30px",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                height: isMobile ? "200px" : "350px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isMobile ? "15px" : "30px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  color: "white",
                }}
              >
                <h3 style={{ fontSize: isMobile ? "1rem" : "1.3rem", fontWeight: "400", marginBottom: "5px" }}>
                  {category.name}
                </h3>
                <p style={{ fontSize: isMobile ? "0.75rem" : "0.85rem", color: "#ccc" }}>
                  {category.count} Items
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;