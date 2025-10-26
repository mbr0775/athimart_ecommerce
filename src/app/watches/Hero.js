"use client";

import React, { useState, useEffect } from "react";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroSlides = [
    {
      subtitle: "ALLOW YOURSELF TO BE A STEP AHEAD",
      title: "Discover Premium Timepieces and Cutting-Edge Technology",
      description:
        "Athimart brings you the finest collection of luxury watches, smart wearables, and precision timepieces from around the world.",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1400&q=80&auto=format&fit=crop",
    },
    {
      subtitle: "LUXURY MEETS INNOVATION",
      title: "Swiss Craftsmanship & Modern Design",
      description:
        "Experience the perfect blend of traditional watchmaking and contemporary style with our exclusive collection.",
      image: "https://images.unsplash.com/photo-1587836374228-4c1eef0ed912?w=1400&q=80&auto=format&fit=crop",
    },
    {
      subtitle: "SMART TECHNOLOGY",
      title: "Advanced Smartwatches for Active Lifestyles",
      description:
        "Track your fitness, monitor your health, and stay connected with our range of premium smartwatches.",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1400&q=80&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const { subtitle, title, description, image } = heroSlides[currentSlide];

  return (
    <section
      style={{
        position: "relative",
        height: isMobile ? "100vh" : "100vh",
        minHeight: isMobile ? "600px" : "auto",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Background Images Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: isMobile ? "100%" : "60%",
          overflow: "hidden",
        }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
              opacity: index === currentSlide && fade ? (isMobile ? 0.3 : 1) : 0,
              transform: index === currentSlide && fade ? "scale(1)" : "scale(1.1)",
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isMobile
            ? "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)"
            : "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 60px",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: isMobile ? "100%" : "600px",
            width: "100%",
            transition: "all 0.8s ease-in-out",
            opacity: fade ? 1 : 0,
            transform: fade ? "translateX(0)" : "translateX(-30px)",
          }}
        >
          <div
            style={{
              fontSize: isMobile ? "0.65rem" : "0.75rem",
              fontWeight: "600",
              letterSpacing: isMobile ? "2px" : "3px",
              color: "#999",
              marginBottom: isMobile ? "15px" : "20px",
            }}
          >
            {subtitle}
          </div>

          <h1
            style={{
              fontSize: isMobile ? "2rem" : "3.5rem",
              margin: isMobile ? "0 0 20px 0" : "0 0 30px 0",
              fontWeight: "300",
              lineHeight: "1.2",
              letterSpacing: isMobile ? "0.5px" : "1px",
              color: "white",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: isMobile ? "0.9rem" : "1rem",
              margin: isMobile ? "0 0 30px 0" : "0 0 50px 0",
              lineHeight: "1.8",
              color: "#c0c0c0",
              fontWeight: "300",
            }}
          >
            {description}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "15px",
            }}
          >
            <button
              style={{
                background: "white",
                color: "#000",
                padding: isMobile ? "12px 30px" : "15px 40px",
                border: "none",
                cursor: "pointer",
                fontWeight: "400",
                fontSize: isMobile ? "0.85rem" : "0.95rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#f0f0f0")}
              onMouseOut={(e) => (e.currentTarget.style.background = "white")}
            >
              Explore Products
            </button>
            <button
              style={{
                background: "transparent",
                color: "white",
                padding: isMobile ? "12px 30px" : "15px 40px",
                border: "1px solid rgba(255,255,255,0.4)",
                cursor: "pointer",
                fontWeight: "400",
                fontSize: isMobile ? "0.85rem" : "0.95rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
            >
              Learn More
            </button>
          </div>

          <div
            style={{
              marginTop: isMobile ? "40px" : "60px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "20px" : "40px",
              paddingTop: isMobile ? "20px" : "30px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: isMobile ? "0.65rem" : "0.7rem",
                  color: "#666",
                  marginBottom: "5px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Explore Watches
              </div>
              <div
                style={{
                  fontSize: isMobile ? "0.85rem" : "0.9rem",
                  color: "#fff",
                  fontWeight: "300",
                }}
              >
                1000+ Collections
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: isMobile ? "0.65rem" : "0.7rem",
                  color: "#666",
                  marginBottom: "5px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Free Shipping
              </div>
              <div
                style={{
                  fontSize: isMobile ? "0.85rem" : "0.9rem",
                  color: "#fff",
                  fontWeight: "300",
                }}
              >
                On orders $500+
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: isMobile ? "0.65rem" : "0.7rem",
                  color: "#666",
                  marginBottom: "5px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Get Started
              </div>
              <div
                style={{
                  fontSize: isMobile ? "0.85rem" : "0.9rem",
                  color: "#fff",
                  fontWeight: "300",
                }}
              >
                Shop now
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "30px" : "40px",
          left: isMobile ? "50%" : "60px",
          transform: isMobile ? "translateX(-50%)" : "none",
          display: "flex",
          gap: "12px",
          zIndex: 2,
        }}
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFade(false);
              setTimeout(() => {
                setCurrentSlide(index);
                setFade(true);
              }, 300);
            }}
            style={{
              width: index === currentSlide ? "40px" : "12px",
              height: "2px",
              background: index === currentSlide ? "white" : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;