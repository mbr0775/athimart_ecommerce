"use client";

import { useState, useEffect } from "react";

function HomeSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Content data for the carousel
  const slides = [
    {
      title: "Welcome to Athimart",
      subtitle: "Your trusted partner for software, services, and more",
      description: "Discover genuine software licenses, professional IT services, quality products, and educational resources all in one place.",
      buttonText: "Explore Products"
    },
    {
      title: "Premium Software Licenses",
      subtitle: "Authentic software solutions for your business",
      description: "Get genuine Microsoft Office, Adobe Creative Suite, antivirus software, and more at competitive prices with full support and warranties.",
      buttonText: "Browse Software"
    },
    {
      title: "Professional IT Services",
      subtitle: "Expert technology support when you need it",
      description: "From system setup and maintenance to cybersecurity consulting, our certified professionals provide comprehensive IT solutions.",
      buttonText: "Get Support"
    }
  ];

  // Auto-change content every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[calc(100vh-73px)] bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-500 ease-in-out">
            {slides[currentSlide].title}
          </h1>
          
          <h2 className="text-lg md:text-xl text-gray-700 font-medium mb-4 transition-all duration-500 ease-in-out">
            {slides[currentSlide].subtitle}
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-500 ease-in-out">
            {slides[currentSlide].description}
          </p>
          
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all transform hover:scale-105 shadow-lg">
            {slides[currentSlide].buttonText}
          </button>
        </div>
        
        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-16 left-10 w-16 h-16 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-32 right-20 w-24 h-24 bg-purple-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-indigo-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-16 right-1/3 w-14 h-14 bg-pink-200/30 rounded-full blur-xl"></div>
    </div>
  );
}

export default HomeSection;