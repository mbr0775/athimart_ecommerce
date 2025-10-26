import React, { useState, useEffect } from 'react';

const slides = [
  {
    subtitle: 'WELCOME TO ATHIMART',
    title: 'Where Technology Meets Lifestyle, Fitness & Tradition',
    description: 'Global e-commerce platform powered by Tokilo Technologies, delivering IT solutions, AI gadgets, fitness tech, and premium natural essences across Gulf Countries, Sri Lanka & Europe.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
  },
  {
    subtitle: 'IT SOLUTIONS & GENUINE SOFTWARE',
    title: 'Digital Transformation & Business Innovation',
    description: 'Licensed software distribution, ERP systems, mobile applications, and AI-driven business solutions powered by Tokilo Technologies for modern enterprises.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
  },
  {
    subtitle: 'AI-INTEGRATED SMART GADGETS',
    title: 'Smart AI Devices for Modern Living',
    description: 'Experience cutting-edge smart wearables, home automation systems, and connected devices that enhance your daily lifestyle and productivity.',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
    gradient: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)',
  },
  {
    subtitle: 'FITNESS & WELLNESS TECHNOLOGY',
    title: 'Sports & Gym Workout Gadgets',
    description: 'Premium fitness trackers, gym tech accessories, and workout tools designed to track, improve, and maximize your performance and health goals.',
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&q=80',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1e1e1e 50%, #2d2d2d 100%)',
  },
  {
    subtitle: 'TRADITIONAL & NATURAL ESSENCES',
    title: 'Premium Oils & Natural Treasures',
    description: 'Authentic Oud, Sandalwood, Frankincense, Myrrh, Rose Otto, and premium essential oils. Experience the finest traditional essences from Sri Lanka and beyond.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80',
    gradient: 'linear-gradient(135deg, #1a0e0a 0%, #2d1810 50%, #3d2416 100%)',
  },
  {
    subtitle: 'PREMIUM AGARWOOD EXPORTS',
    title: 'Luxury Agarwood Products',
    description: 'Exclusive premium agarwood products in partnership with Goviceylon. Discover the finest quality agarwood from our Sri Lankan headquarters.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    gradient: 'linear-gradient(135deg, #0d0905 0%, #1f1710 50%, #2a1f15 100%)',
  },
  {
    subtitle: 'FASHION & LIFESTYLE',
    title: 'Clothing & Premium Accessories',
    description: 'Trend-driven clothing, fashion accessories, and lifestyle items curated for modern living. Style meets quality in every collection.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
  },
];

const AthimartHeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { subtitle, title, description, image, gradient } = slides[currentSlide];

  return (
    <section
      style={{
        background: gradient,
        color: 'white',
        padding: '0',
        position: 'relative',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: isMobile ? 'column' : 'row',
          padding: isMobile ? '60px 20px' : '80px 60px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left Content */}
        <div
          style={{
            maxWidth: isMobile ? '100%' : '50%',
            transition: 'all 0.5s ease-in-out',
            opacity: fade ? 1 : 0,
            transform: fade ? 'translateX(0)' : 'translateX(-30px)',
            marginBottom: isMobile ? '40px' : '0',
          }}
        >
          {/* Subtitle */}
          <div
            style={{
              fontSize: isMobile ? '0.7rem' : '0.8rem',
              fontWeight: '600',
              letterSpacing: '3px',
              color: '#999',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            {subtitle}
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: isMobile ? '2.2rem' : '4.2rem',
              margin: '0 0 30px 0',
              fontWeight: '700',
              lineHeight: '1.1',
              letterSpacing: '-1px',
            }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              margin: '0 0 40px 0',
              lineHeight: '1.7',
              color: '#b0b0b0',
              maxWidth: '550px',
            }}
          >
            {description}
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button
              style={{
                background: 'white',
                color: '#000',
                padding: isMobile ? '12px 28px' : '14px 32px',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: isMobile ? '0.9rem' : '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255,255,255,0.2)',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(255,255,255,0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(255,255,255,0.2)';
              }}
            >
              Shop Now
            </button>
            <button
              style={{
                background: 'transparent',
                color: 'white',
                padding: isMobile ? '12px 28px' : '14px 32px',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: isMobile ? '0.9rem' : '1rem',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)';
                e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Learn More
            </button>
          </div>

          {/* Contact Info */}
          <div
            style={{
              marginTop: '40px',
              fontSize: '0.9rem',
              color: '#888',
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <div>📧 info@athimart.com</div>
            <div>📱 +974 7406 2481</div>
          </div>
        </div>

        {/* Right Image */}
        <div
          style={{
            maxWidth: isMobile ? '100%' : '50%',
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end',
            alignItems: 'center',
            transition: 'all 0.5s ease-in-out',
            opacity: fade ? 1 : 0,
            transform: fade ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.95)',
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: isMobile ? '100%' : '90%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))',
              maxHeight: '600px',
            }}
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 2,
        }}
      >
        {slides.map((_, index) => (
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
              width: index === currentSlide ? '40px' : '12px',
              height: '12px',
              borderRadius: '6px',
              background: index === currentSlide ? 'white' : 'rgba(255,255,255,0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
            onMouseOver={(e) => {
              if (index !== currentSlide) {
                e.target.style.background = 'rgba(255,255,255,0.5)';
              }
            }}
            onMouseOut={(e) => {
              if (index !== currentSlide) {
                e.target.style.background = 'rgba(255,255,255,0.3)';
              }
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: isMobile ? '-50px' : '-100px',
          width: isMobile ? '200px' : '400px',
          height: isMobile ? '200px' : '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100,100,255,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Powered by Tokilo Badge */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontSize: '0.75rem',
          color: '#666',
          background: 'rgba(255,255,255,0.05)',
          padding: '8px 16px',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        Powered by Tokilo Technologies
      </div>
    </section>
  );
};

export default AthimartHeroBanner;