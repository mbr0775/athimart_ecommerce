"use client";
import { useState, useEffect, useCallback } from 'react';

// Combined component that includes both HomeSection and Banner functionality
function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Combined banner data - moved outside to prevent recreation
  const banners = [
    {
      id: 1,
      category: "Software Solutions",
      title: "Welcome to Athimart",
      subtitle: "Your trusted partner for software & services",
      description: "Discover genuine software licenses, professional IT services, quality products, and educational resources all in one place.",
      buttonText: "Explore Products",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop&crop=center",
      bgColor: "from-blue-900/20 to-purple-900/20",
      type: "service"
    },
    {
      id: 2,
      category: "Premium Software Licenses",
      title: "Authentic Software",
      subtitle: "Solutions for Business",
      description: "Get genuine Microsoft Office, Adobe Creative Suite, antivirus software, and more at competitive prices with full support.",
      buttonText: "Browse Software",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=400&fit=crop&crop=center",
      bgColor: "from-gray-900/20 to-slate-900/20",
      type: "service"
    },
    {
      id: 3,
      category: "Premium Spice, Kashmir Saffron",
      title: "Pure Saffron Threads &",
      subtitle: "Authentic Quality",
      description: "Experience the finest saffron from Kashmir, carefully selected and processed to deliver exceptional flavor and aroma.",
      buttonText: "Shop Now",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=400&fit=crop&crop=center",
      bgColor: "from-amber-900/20 to-orange-900/20",
      type: "product"
    },
    {
      id: 4,
      category: "Handcrafted Jewelry, Precious Stones",
      title: "Exquisite Gemstone &",
      subtitle: "Artisan Jewelry Collection",
      description: "Discover handcrafted jewelry featuring precious gemstones, each piece telling a story of craftsmanship and elegance.",
      buttonText: "Explore Collection",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=400&fit=crop&crop=center",
      bgColor: "from-purple-900/20 to-pink-900/20",
      type: "product"
    },
    {
      id: 5,
      category: "Pure Essential Oil, Aromatic",
      title: "Premium Agarwood Oil &",
      subtitle: "Natural Fragrance",
      description: "Indulge in the rich, complex aroma of authentic agarwood oil, distilled using traditional methods for purity.",
      buttonText: "Discover Scents",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=400&fit=crop&crop=center",
      bgColor: "from-green-900/20 to-teal-900/20",
      type: "product"
    },
    {
      id: 6,
      category: "Professional IT Services",
      title: "Expert Technology",
      subtitle: "Support Solutions",
      description: "From system setup and maintenance to cybersecurity consulting, our certified professionals provide comprehensive IT solutions.",
      buttonText: "Get Support",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop&crop=center",
      bgColor: "from-indigo-900/20 to-blue-900/20",
      type: "service"
    }
  ];

  // Memoized function to go to next slide
  const goToNextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % banners.length);
        setTimeout(() => setIsAnimating(false), 100);
      }, 150);
    }
  }, [isAnimating, banners.length]);

  // Auto-change banners every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 3000); // Changed to 3 seconds

    return () => clearInterval(timer);
  }, [goToNextSlide]);

  const handleSlideChange = (slideIndex) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = typeof slideIndex === 'function' ? slideIndex(currentSlide) : slideIndex;
    
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setTimeout(() => setIsAnimating(false), 100);
    }, 150);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide && !isAnimating) {
      handleSlideChange(index);
    }
  };

  const nextSlide = () => {
    if (!isAnimating) {
      handleSlideChange((prev) => (prev + 1) % banners.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      handleSlideChange((prev) => (prev - 1 + banners.length) % banners.length);
    }
  };

  const currentBanner = banners[currentSlide];

  return (
    <div className={`w-full min-h-[100vh] relative overflow-hidden bg-gradient-to-br ${currentBanner.bgColor} transition-all duration-1000 ease-out`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-black/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-black/10 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-black/5 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-32 right-1/4 w-20 h-20 bg-black/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-black/10 backdrop-blur-sm hover:bg-black/20 transition-all hover:scale-110 disabled:opacity-50"
      >
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-4 rounded-full bg-black/10 backdrop-blur-sm hover:bg-black/20 transition-all hover:scale-110 disabled:opacity-50"
      >
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Auto-advance indicator */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex items-center space-x-2 bg-black/10 backdrop-blur-sm px-3 py-2 rounded-full">
          <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          <span className="text-xs text-black font-medium">AUTO</span>
        </div>
      </div>

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[100vh]">
          
          {/* Left Content */}
          <div className={`order-2 lg:order-1 text-center lg:text-left transform transition-all duration-700 ease-out ${
            isAnimating ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            <div className="space-y-6">
              <div className="overflow-hidden">
                <p className={`text-sm text-gray-600 tracking-wider uppercase font-medium transition-all duration-500 delay-100 transform ${
                  isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}>
                  {currentBanner.category}
                </p>
              </div>
              
              <div className="overflow-hidden">
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight transition-all duration-700 delay-200 transform ${
                  isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
                }`}>
                  <span className="block">{currentBanner.title}</span>
                  <span className="block bg-gradient-to-r from-white to-grey bg-clip-text text-transparent">
                    {currentBanner.subtitle}
                  </span>
                </h1>
              </div>

              <div className="overflow-hidden">
                <p className={`text-base md:text-lg text-white leading-relaxed max-w-xl transition-all duration-700 delay-250 transform ${
                  isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}>
                  {currentBanner.description}
                </p>
              </div>
              
              <div className="overflow-hidden">
                <button className={`group relative bg-black text-white px-10 py-4 font-bold text-sm tracking-wider uppercase overflow-hidden transition-all duration-700 delay-300 transform hover:scale-105 ${
                  isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}>
                  <span className="relative z-10 transition-colors group-hover:text-white">
                    {currentBanner.buttonText}
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-white transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Image Content */}
          <div className={`order-1 lg:order-2 relative transition-all duration-700 ease-out ${
            isAnimating ? '-translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            <div className="relative group cursor-pointer">
              {/* Main image container */}
              <div className="relative w-full max-w-lg mx-auto h-[300px] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                {/* Image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                  <img
                    key={currentBanner.id} // Added key to force re-render
                    src={currentBanner.image}
                    alt={currentBanner.subtitle}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    style={{
                      filter: 'contrast(1.1) brightness(0.9)',
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {currentBanner.type === 'service' ? 'Service' : 'Product'}
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-black rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-8 left-8 w-32 h-32 bg-black/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
          {/* Enhanced Dot Navigation */}
          <div className="flex space-x-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`group relative transition-all duration-300 disabled:opacity-50 ${
                  currentSlide === index 
                    ? 'w-12 h-4 bg-black rounded-full' 
                    : 'w-4 h-4 bg-black/30 rounded-full hover:bg-black/60 hover:scale-125'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              >
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Progress Bar with Auto-advance Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="relative w-48 h-1 bg-black/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-black via-gray-700 to-black relative rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${((currentSlide + 1) / banners.length) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
            {/* Auto-advance progress indicator */}
            <div className="absolute top-0 left-0 h-full bg-white/20 rounded-full animate-pulse" 
                 style={{ 
                   width: `${((currentSlide + 1) / banners.length) * 100}%`,
                   animation: 'progress 3s linear infinite'
                 }}>
            </div>
          </div>
        </div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute left-0 top-1/2 w-0.5 sm:w-1 h-20 sm:h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      <div className="absolute right-0 top-1/2 w-0.5 sm:w-1 h-20 sm:h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

      <style jsx>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}

export default HeroBanner;