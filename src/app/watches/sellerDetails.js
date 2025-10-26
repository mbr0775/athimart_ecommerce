"use client";

import React, { useState, useRef, useEffect } from "react";

function SellerDetail() {
  const [activeTab, setActiveTab] = useState("best-sellers");
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const products = {
    "best-sellers": [
      {
        id: 1,
        name: "SEIKO",
        description: "Prospex Speedtimer Speedmaster European Exclusive Limited Edition Watch SSC947P1",
        price: "£850.00",
        image: "https://www.seikowatches.com/us-en/-/media/Images/GlobalEn/Seiko/Home/products/presage/classic/SARX121.png",
      },
      {
        id: 2,
        name: "TISSOT",
        description: "Mens Seastar 1000 Powermatic Watch T1204071104100",
        originalPrice: "£715.00",
        salePrice: "£596.00",
        image: "https://www.nicepng.com/png/detail/437-4372567_tissot-watch-tissot-watch-tissot-watches-png.png",
      },
      {
        id: 3,
        name: "ALPINA",
        description: "Mens Startimer Pilot Big Date Black Dial Watch AL-372B4S6B",
        price: "£995.00",
        image: "https://png.pngtree.com/png-vector/20240623/ourmid/pngtree-men-watch-png-image_12827026.png",
      },
      {
        id: 4,
        name: "BULOVA",
        description: "Mens Precisionist Stainless Steel Black and Blue Chronograph Dial Bracelet Watch 98B316",
        originalPrice: "£529.00",
        salePrice: "£450.00",
        image: "https://uk.bulova.com/media/catalog/product/9/8/98b462_catalog.png?optimize=high&bg-color=255,255,255&fit=bounds&height=720&width=720&canvas=720:720&format=jpeg",
      },
    ],
    "new-in": [
      {
        id: 5,
        name: "OMEGA",
        description: "Seamaster Professional Diver 300M Co-Axial Master Chronometer",
        price: "£4,250.00",
        image: "https://www.omegawatches.com/media/catalog/product/cache/cf50d84bb83d00bb475710c94120437339daad52fa4e4c2e5642f9630b10056b/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22010382003003-7246b9.png",
      },
      {
        id: 6,
        name: "TAG HEUER",
        description: "Carrera Calibre 16 Chronograph Steel Watch",
        price: "£3,450.00",
        image: "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dwa4413331/TAG_Heuer_Formula_1/WBY1111.BA0042/WBY1111.BA0042_0913.png",
      },
      {
        id: 7,
        name: "CITIZEN",
        description: "Eco-Drive Promaster Diver Watch BN0150-28E",
        price: "£299.00",
        image: "https://www.citizenwatch.co.uk/media/catalog/product/c/b/cb5878-56e_catalog_1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=1000&width=1000&canvas=1000:1000&format=jpeg",
      },
      {
        id: 8,
        name: "HAMILTON",
        description: "Khaki Field Automatic Brown Leather Watch",
        price: "£545.00",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop",
      },
    ],
    sale: [
      {
        id: 9,
        name: "CASIO",
        description: "G-Shock Digital Analog Black Resin Watch GA-2100-1A1ER",
        originalPrice: "£109.00",
        salePrice: "£89.00",
        image: "https://static.vecteezy.com/system/resources/previews/047/605/291/non_2x/casio-watches-isolated-on-transparent-background-png.png",
      },
      {
        id: 10,
        name: "FOSSIL",
        description: "Grant Chronograph Blue Leather Watch FS5151",
        originalPrice: "£169.00",
        salePrice: "£119.00",
        image: "https://www.nicepng.com/png/detail/915-9151544_watch-png-transparent-images-fossil-fs5061.png",
      },
      {
        id: 11,
        name: "MICHAEL KORS",
        description: "Lexington Chronograph Gold Watch MK8286",
        originalPrice: "£249.00",
        salePrice: "£179.00",
        image: "https://wwd.com/wp-content/uploads/2024/03/michael-kors-runway-watch-blue.jpg?w=1000",
      },
      {
        id: 12,
        name: "EMPORIO ARMANI",
        description: "Renato Chronograph Black Dial Watch AR11143",
        originalPrice: "£329.00",
        salePrice: "£229.00",
        image: "https://justintime.in/cdn/shop/products/MKT5139.jpg?v=1682033438",
      },
    ],
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentProducts = products[activeTab];

  const addToCart = (productId) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const scrollToTab = (tab) => {
    if (isMobile && scrollContainerRef.current) {
      const tabs = ["best-sellers", "new-in", "sale"];
      const tabIndex = tabs.indexOf(tab);
      const cardWidth = scrollContainerRef.current.querySelector('.product-card')?.offsetWidth || 280;
      const gap = 15;
      const scrollPosition = tabIndex * 4 * (cardWidth + gap);
      
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !isMobile) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !isMobile) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.querySelector('.product-card')?.offsetWidth || 300;
      const scrollPosition = container.scrollLeft;
      const cardIndex = Math.round(scrollPosition / (cardWidth + 15));
      
      const tabs = ["best-sellers", "new-in", "sale"];
      const productsPerTab = 4;
      const tabIndex = Math.floor(cardIndex / productsPerTab);
      
      if (tabs[tabIndex] && tabs[tabIndex] !== activeTab) {
        setActiveTab(tabs[tabIndex]);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const allProducts = [
    ...products["best-sellers"],
    ...products["new-in"],
    ...products["sale"]
  ];

  const ProductCard = ({ product }) => (
    <div
      className="product-card"
      style={{
        background: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseOver={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
        }
      }}
      onMouseOut={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }
      }}
    >
      {/* Wishlist Heart */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product.id);
        }}
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          background: "rgba(255, 255, 255, 0.9)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10,
          transition: "all 0.3s ease",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={wishlist[product.id] ? "#000" : "none"}
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      {/* Product Image */}
      <div
        style={{
          width: "100%",
          height: "300px",
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Product Details */}
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: "600",
            margin: "0 0 10px 0",
            color: "#000",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "0.85rem",
            color: "#666",
            margin: "0 0 15px 0",
            lineHeight: "1.4",
            minHeight: "40px",
          }}
        >
          {product.description}
        </p>

        {/* Price */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
          {product.salePrice ? (
            <>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#d32f2f",
                }}
              >
                {product.salePrice}
              </span>
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "#999",
                  textDecoration: "line-through",
                }}
              >
                {product.originalPrice}
              </span>
            </>
          ) : (
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#000",
              }}
            >
              {product.price}
            </span>
          )}
        </div>

        {/* Cart Controls */}
        {cart[product.id] ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#000",
              borderRadius: "6px",
              padding: "8px 12px",
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFromCart(product.id);
              }}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1.3rem",
                cursor: "pointer",
                padding: "0 10px",
                lineHeight: 1,
              }}
            >
              −
            </button>
            <span
              style={{
                color: "#fff",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {cart[product.id]}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product.id);
              }}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1.3rem",
                cursor: "pointer",
                padding: "0 10px",
                lineHeight: 1,
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product.id);
            }}
            style={{
              width: "100%",
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "12px",
              fontSize: "0.95rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#333";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#000";
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#f8f8f8",
      }}
    >
      <style>
        {`
          .desktop-grid {
            display: none;
          }
          
          .mobile-scroll {
            display: flex;
          }
          
          @media (min-width: 769px) {
            .desktop-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 30px;
            }
            
            .mobile-scroll {
              display: none;
            }
          }
          
          .mobile-scroll::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            marginBottom: "60px",
          }}
        >
          <button
            onClick={() => {
              setActiveTab("best-sellers");
              scrollToTab("best-sellers");
            }}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: activeTab === "best-sellers" ? "600" : "400",
              color: activeTab === "best-sellers" ? "#000" : "#666",
              cursor: "pointer",
              padding: "10px 0",
              position: "relative",
              transition: "all 0.3s ease",
            }}
          >
            Best Sellers
            {activeTab === "best-sellers" && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "#000",
                }}
              />
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab("new-in");
              scrollToTab("new-in");
            }}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: activeTab === "new-in" ? "600" : "400",
              color: activeTab === "new-in" ? "#000" : "#666",
              cursor: "pointer",
              padding: "10px 0",
              position: "relative",
              transition: "all 0.3s ease",
            }}
          >
            New In
            {activeTab === "new-in" && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "#000",
                }}
              />
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab("sale");
              scrollToTab("sale");
            }}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: activeTab === "sale" ? "600" : "400",
              color: activeTab === "sale" ? "#000" : "#666",
              cursor: "pointer",
              padding: "10px 0",
              position: "relative",
              transition: "all 0.3s ease",
            }}
          >
            Sale
            {activeTab === "sale" && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "#000",
                }}
              />
            )}
          </button>
        </div>

        {/* Desktop Grid View */}
        <div className="desktop-grid">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile Horizontal Scroll View */}
        <div
          ref={scrollContainerRef}
          className="mobile-scroll"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          style={{
            overflowX: "auto",
            gap: "15px",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
          }}
        >
          {allProducts.map((product) => (
            <div
              key={product.id}
              style={{
                minWidth: "280px",
                maxWidth: "280px",
                scrollSnapAlign: "start",
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SellerDetail;