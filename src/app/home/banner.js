"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Import your banner images
import banner1 from '../assets/saffron_threads.jpg';
import banner2 from '../assets/gemstone_work.png';
import banner3 from '../assets/agarwood_oil.png';
import banner4 from '../assets/agarwood.jpg';

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Banner data - using imported images
  const banners = [
    {
      id: 1,
      category: "Premium Spice, Kashmir Saffron",
      title: "Pure Saffron Threads &",
      subtitle: "Authentic Quality",
      buttonText: "Shop Now",
      image: banner1, // Using imported image
      hasCustomGraphic: false
    },
    {
      id: 2,
      category: "Handcrafted Jewelry, Precious Stones",
      title: "Exquisite Gemstone &",
      subtitle: "Artisan Jewelry Collection",
      buttonText: "Explore Collection",
      image: banner2, // Using imported image
      hasCustomGraphic: false
    },
    {
      id: 3,
      category: "Pure Essential Oil, Aromatic",
      title: "Premium Agarwood Oil &",
      subtitle: "Natural Fragrance",
      buttonText: "Discover Scents",
      image: banner3, // Using imported image
      hasCustomGraphic: false
    },
    {
      id: 4,
      category: "Rare Wood, Natural Incense",
      title: "Authentic Agarwood &",
      subtitle: "Sacred Aromatics",
      buttonText: "View Products",
      image: banner4, // Using imported image
      hasCustomGraphic: false
    }
  ];

  // Auto-change banners every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const currentBanner = banners[currentSlide];

  return (
    <div className="w-full bg-gray-50 py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm text-gray-500 mb-3 tracking-wide transition-all duration-500">
              {currentBanner.category}
            </p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-500">
              {currentBanner.title}<br />
              {currentBanner.subtitle}
            </h2>
            
            <button className="bg-black text-white px-8 py-3 rounded-sm hover:bg-gray-800 transition-colors font-medium text-sm tracking-wide">
              {currentBanner.buttonText}
            </button>
          </div>
          
          {/* Right Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="flex justify-center items-center min-h-[300px] md:min-h-[400px]">
              
              {currentBanner.hasCustomGraphic ? (
                // Custom CSS graphic for first banner
                <div className="relative w-full max-w-md">
                  {/* Modern table with lamp setup */}
                  <div className="relative">
                    {/* Table top */}
                    <div className="w-64 h-32 bg-gray-800 rounded-full transform -skew-y-1 shadow-lg mx-auto"></div>
                    
                    {/* Table legs */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                      <div className="flex justify-between w-48">
                        <div className="w-3 h-16 bg-gray-700 transform -skew-x-12"></div>
                        <div className="w-3 h-16 bg-gray-700 transform skew-x-12"></div>
                        <div className="w-3 h-16 bg-gray-700 transform -skew-x-12"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Small table lamp on the table */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-4">
                    {/* Lamp base */}
                    <div className="w-6 h-8 bg-gray-300 rounded-full mx-auto"></div>
                    {/* Lamp shade */}
                    <div className="w-12 h-8 bg-gray-200 rounded-t-full -mt-2 shadow-sm"></div>
                  </div>
                  
                  {/* Floor lamp */}
                  <div className="absolute -top-8 right-8">
                    {/* Lamp pole */}
                    <div className="w-1 h-40 bg-gray-600 mx-auto"></div>
                    {/* Lamp shade */}
                    <div className="w-20 h-16 bg-gray-800 rounded-t-full rounded-b-sm -mt-1 shadow-lg"></div>
                    {/* Lamp base */}
                    <div className="w-16 h-3 bg-gray-700 rounded-full mt-36"></div>
                  </div>
                  
                  {/* Decorative items on table */}
                  <div className="absolute top-4 left-1/2 transform translate-x-4 -translate-y-2">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full mt-1 ml-1"></div>
                  </div>
                </div>
              ) : (
                // Image display for other banners
                <div className="relative w-full max-w-md h-[400px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={currentBanner.image}
                    alt={currentBanner.subtitle}
                    fill
                    className="object-contain transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-8 space-x-6">
          {/* Previous/Next Rectangle Buttons */}
          <button
            onClick={prevSlide}
            className="w-12 h-8 bg-gray-300 hover:bg-gray-400 rounded transition-colors flex items-center justify-center"
            aria-label="Previous banner"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot Navigation */}
          <div className="flex space-x-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gray-800 scale-110' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-12 h-8 bg-gray-300 hover:bg-gray-400 rounded transition-colors flex items-center justify-center"
            aria-label="Next banner"
          >
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center mt-4">
          <div className="w-32 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gray-800 transition-all duration-300 ease-out"
              style={{ width: `${((currentSlide + 1) / banners.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;