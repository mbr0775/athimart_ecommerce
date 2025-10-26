"use client";

import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

function FeaturedProducts() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const products = [
    {
      id: 1,
      name: "Rolex Submariner Classic",
      brand: "Rolex",
      price: 8950.0,
      originalPrice: 10500.0,
      rating: 4.9,
      reviews: 287,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&q=80",
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Apple Watch Series 9",
      brand: "Apple",
      price: 429.0,
      originalPrice: 499.0,
      rating: 4.8,
      reviews: 1245,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
      tag: "New Arrival",
    },
    {
      id: 3,
      name: "Omega Speedmaster",
      brand: "Omega",
      price: 6250.0,
      originalPrice: 7200.0,
      rating: 4.9,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1587836374228-4c1eef0ed912?w=500&q=80",
      tag: "Limited",
    },
    {
      id: 4,
      name: "TAG Heuer Carrera",
      brand: "TAG Heuer",
      price: 3850.0,
      originalPrice: 4500.0,
      rating: 4.7,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500&q=80",
      tag: "Featured",
    },
  ];

  return (
    <section
      id="products"
      style={{ padding: isMobile ? "60px 0" : "100px 0", background: "#fff" }}
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
            Featured Watches
          </h2>
          <p style={{ fontSize: isMobile ? "0.9rem" : "1rem", color: "#666", fontWeight: "300" }}>
            Handpicked premium timepieces for every style
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
            gap: isMobile ? "20px" : "30px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: "white",
                border: "1px solid #e0e0e0",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: isMobile ? "300px" : "350px",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "#000",
                    color: "white",
                    padding: "5px 15px",
                    fontSize: "0.75rem",
                    letterSpacing: "1px",
                  }}
                >
                  {product.tag}
                </div>
                <button
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "white")}
                >
                  <Heart size={18} />
                </button>
              </div>

              <div style={{ padding: isMobile ? "20px" : "25px" }}>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "10px",
                  }}
                >
                  {product.brand}
                </p>
                <h3
                  style={{
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    fontWeight: "400",
                    color: "#000",
                    marginBottom: "15px",
                    minHeight: isMobile ? "auto" : "50px",
                  }}
                >
                  {product.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "15px",
                  }}
                >
                  <div style={{ display: "flex", color: "#ffc107" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "#666" }}>
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: isMobile ? "1.3rem" : "1.5rem",
                      fontWeight: "400",
                      color: "#000",
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </span>
                  <span
                    style={{
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      color: "#999",
                      textDecoration: "line-through",
                    }}
                  >
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>

                <button
                  style={{
                    width: "100%",
                    background: "#000",
                    color: "white",
                    padding: isMobile ? "12px" : "15px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: isMobile ? "0.85rem" : "0.9rem",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "background 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#333")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "#000")}
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;