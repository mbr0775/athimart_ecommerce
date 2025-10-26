"use client";

import React, { useState, useEffect } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer style={{ background: "#000", color: "white", padding: isMobile ? "40px 0" : "60px 0" }}>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: isMobile ? "1.5rem" : "1.8rem",
            fontWeight: "700",
            marginBottom: isMobile ? "15px" : "20px",
            letterSpacing: "2px",
          }}
        >
          ATHIMART
        </div>
        <p
          style={{
            color: "#666",
            fontSize: isMobile ? "0.85rem" : "0.9rem",
            marginBottom: isMobile ? "25px" : "30px",
          }}
        >
          Your trusted destination for luxury and premium watches
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: isMobile ? "20px" : "30px",
            marginBottom: isMobile ? "25px" : "30px",
            flexWrap: "wrap",
          }}
        >
          <a href="#" style={{ color: "#999", textDecoration: "none", fontSize: isMobile ? "0.85rem" : "0.9rem" }}>
            About
          </a>
          <a href="#" style={{ color: "#999", textDecoration: "none", fontSize: isMobile ? "0.85rem" : "0.9rem" }}>
            Contact
          </a>
          <a href="#" style={{ color: "#999", textDecoration: "none", fontSize: isMobile ? "0.85rem" : "0.9rem" }}>
            Shipping
          </a>
          <a href="#" style={{ color: "#999", textDecoration: "none", fontSize: isMobile ? "0.85rem" : "0.9rem" }}>
            Returns
          </a>
        </div>
        <p
          style={{
            color: "#666",
            fontSize: isMobile ? "0.75rem" : "0.85rem",
            lineHeight: "1.6",
          }}
        >
          © 2025 Athimart. All rights reserved. | Powered by Tokilo Technologies
        </p>
      </div>
    </footer>
  );
}

export default Footer;