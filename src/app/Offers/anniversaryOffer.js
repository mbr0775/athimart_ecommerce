"use client";
import { useState, useEffect } from 'react';

function AnniversaryOffer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-stone-100 to-gray-100 overflow-hidden flex items-center justify-center py-20 px-4">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      {/* Main content container */}
      <div className="relative max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Floating products */}
          <div className="relative h-[600px] order-2 lg:order-1">
            
            {/* Floating pillow 1 - Top right (brown/tan) */}
            <div 
              className={`absolute top-0 right-12 w-32 h-32 transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
              }`}
              style={{
                animation: 'float 6s ease-in-out infinite',
                animationDelay: '0s'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg shadow-2xl transform rotate-12"
                   style={{
                     boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                   }}
              />
            </div>

            {/* Floating pillow 2 - Upper middle (mint green with flower) */}
            <div 
              className={`absolute top-24 left-16 w-28 h-28 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
              }`}
              style={{
                animation: 'float 7s ease-in-out infinite',
                animationDelay: '1s'
              }}
            >
              <div className="relative w-full h-full bg-gradient-to-br from-emerald-100 to-teal-200 rounded-2xl shadow-2xl transform -rotate-6">
                {/* Small flower decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-300 rounded-full" />
                <div className="absolute -top-1 -right-3 w-4 h-4 bg-pink-400 rounded-full" />
              </div>
            </div>

            {/* Floating pillow 3 - Middle (gray with pattern) */}
            <div 
              className={`absolute top-44 right-20 w-36 h-36 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
              }`}
              style={{
                animation: 'float 8s ease-in-out infinite',
                animationDelay: '0.5s'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg shadow-2xl transform rotate-6 relative overflow-hidden">
                {/* Decorative lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px bg-white/30" />
                  <div className="absolute w-px h-full bg-white/30" />
                </div>
              </div>
            </div>

            {/* Floating pillow 4 - Lower left (beige with texture) */}
            <div 
              className={`absolute bottom-32 left-8 w-40 h-32 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
              }`}
              style={{
                animation: 'float 7.5s ease-in-out infinite',
                animationDelay: '2s'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl shadow-2xl transform -rotate-12 relative overflow-hidden">
                {/* Texture pattern */}
                <div className="absolute inset-0 opacity-20"
                     style={{
                       backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.5) 10px, rgba(255,255,255,0.5) 11px)`
                     }}
                />
              </div>
            </div>

            {/* Floating pillow 5 - Bottom (gray knit) */}
            <div 
              className={`absolute bottom-8 right-16 w-32 h-32 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
              }`}
              style={{
                animation: 'float 6.5s ease-in-out infinite',
                animationDelay: '1.5s'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-2xl transform rotate-3 relative">
                {/* Knit pattern effect */}
                <div className="absolute inset-2 border-2 border-white/20 rounded-lg" />
              </div>
            </div>

            {/* Shopping bag at bottom */}
            <div 
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-48 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="relative w-full h-full">
                {/* Bag body */}
                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-gray-100 to-white border-2 border-gray-300 rounded-t-lg shadow-xl">
                  {/* Brand name on bag */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-xs font-light text-gray-400 tracking-[0.3em] text-center">ATHIMART</p>
                  </div>
                </div>
                {/* Bag handles */}
                <div className="absolute top-0 left-1/4 w-6 h-16 border-2 border-gray-300 rounded-full" />
                <div className="absolute top-0 right-1/4 w-6 h-16 border-2 border-gray-300 rounded-full" />
              </div>
            </div>

          </div>

          {/* Right side - Sale content */}
          <div className={`space-y-8 text-center lg:text-left order-1 lg:order-2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            
            {/* Brand logo/name */}
            <div className="space-y-1">
              <h3 className="text-sm tracking-[0.5em] text-gray-400 font-light uppercase">
                Athimart
              </h3>
              <div className="w-16 h-px bg-gray-300 mx-auto lg:mx-0" />
            </div>

            {/* Sale announcement */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-light text-gray-800 tracking-wide">
                Anniversary Sale
              </h1>
              
              {/* Large discount */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 blur-2xl" />
                <div className="relative">
                  <div className="flex items-start justify-center lg:justify-start">
                    <span className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-none">
                      60
                    </span>
                    <div className="flex flex-col items-start ml-2 mt-4">
                      <span className="text-4xl md:text-5xl font-bold text-gray-900">%</span>
                      <span className="text-sm md:text-base font-light text-gray-500 tracking-wider">OFF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
              Celebrate with us! Premium home essentials, authentic products, and luxury items now available at unbeatable prices.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative px-12 py-4 bg-gray-900 text-white text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-2xl">
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>

            {/* Sale details */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4 text-xs text-gray-500">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Limited Time</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>All Products</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-gray-200 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-gray-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}} />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(var(--rotate-start, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotate-end, 5deg));
          }
        }
      `}</style>
    </div>
  );
}

export default AnniversaryOffer;