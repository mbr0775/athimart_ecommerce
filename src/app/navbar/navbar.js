"use client";
import { useState, useEffect } from 'react';

function AthimartPlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const menuItems = [
    { name: 'TECHNOLOGY', icon: '💻', hasDropdown: true },
    { name: 'FITNESS', icon: '🏃', hasDropdown: true },
    { name: 'LIFESTYLE', icon: '👔', hasDropdown: true },
    { name: 'TRADITION', icon: '🌿', hasDropdown: true },
    { name: 'IT SOLUTIONS', icon: '⚙️', hasDropdown: true },
    { name: 'ABOUT US', icon: '', hasDropdown: false },
    { name: 'CONTACT', icon: '', hasDropdown: false }
  ];

  const heroSlides = [
    {
      id: 1,
      category: "AI-Powered Technology",
      title: "SMART GADGETS",
      subtitle: "WHERE INNOVATION MEETS DAILY LIFE",
      description: "Experience the future with AI-powered wearables, smartwatches, and intelligent devices",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=600&fit=crop",
      bgGradient: "from-blue-900/40 via-cyan-900/30 to-slate-900/40",
      buttonText: "EXPLORE AI TECH",
      badge: "AI Powered"
    },
    {
      id: 2,
      category: "Fitness Technology",
      title: "FITNESS GEAR",
      subtitle: "ELEVATE YOUR PERFORMANCE",
      description: "Professional-grade fitness technology and equipment for athletes and enthusiasts",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      bgGradient: "from-orange-900/40 via-red-900/30 to-gray-900/40",
      buttonText: "SHOP FITNESS",
      badge: "Performance"
    },
    {
      id: 3,
      category: "Premium Fashion",
      title: "LIFESTYLE COLLECTION",
      subtitle: "STYLE MEETS SOPHISTICATION",
      description: "Curated premium fashion and lifestyle products for the modern individual",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      bgGradient: "from-purple-900/40 via-indigo-900/30 to-gray-900/40",
      buttonText: "DISCOVER FASHION",
      badge: "Premium"
    },
    {
      id: 4,
      category: "Natural Essences",
      title: "AGARWOOD OILS",
      subtitle: "TRADITION PRESERVED IN PURITY",
      description: "Authentic agarwood and sandalwood oils - ancient essence for modern luxury",
      image: "https://tmhagarwood.com/wp-content/uploads/2021/10/Agarwood-perfume-price-Thien-Moc-Huong-400x400.jpg",
      bgGradient: "from-amber-900/40 via-yellow-800/30 to-gray-900/40",
      buttonText: "EXPLORE TRADITION",
      badge: "Authentic"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const currentHero = heroSlides[currentSlide];

  return (
    <div className="relative w-full min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md text-white z-50 border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  ATHIMART
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Shop Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveMenu('SHOP')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="text-[11px] font-bold tracking-widest text-gray-300 hover:text-white transition-colors duration-200 py-2 flex items-center space-x-1">
                  <span>SHOP</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform origin-left transition-transform duration-300 ${activeMenu === 'SHOP' ? 'scale-x-100' : 'scale-x-0'}`} />
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl transition-all duration-300 ${activeMenu === 'SHOP' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="py-2">
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
                      <span>💻</span>
                      <div>
                        <div className="font-semibold">Technology</div>
                        <div className="text-xs text-gray-500">AI Gadgets & Smart Devices</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
                      <span>🏃</span>
                      <div>
                        <div className="font-semibold">Fitness</div>
                        <div className="text-xs text-gray-500">Gear & Wearables</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
                      <span>👔</span>
                      <div>
                        <div className="font-semibold">Lifestyle</div>
                        <div className="text-xs text-gray-500">Fashion & Accessories</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
                      <span>🌿</span>
                      <div>
                        <div className="font-semibold">Tradition</div>
                        <div className="text-xs text-gray-500">Agarwood & Natural Oils</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveMenu('SERVICES')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="text-[11px] font-bold tracking-widest text-gray-300 hover:text-white transition-colors duration-200 py-2 flex items-center space-x-1">
                  <span>SERVICES</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform origin-left transition-transform duration-300 ${activeMenu === 'SERVICES' ? 'scale-x-100' : 'scale-x-0'}`} />
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl transition-all duration-300 ${activeMenu === 'SERVICES' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="py-2">
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
                      <span>⚙️</span>
                      <div>
                        <div className="font-semibold">IT Solutions</div>
                        <div className="text-xs text-gray-500">ERP & Enterprise Systems</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
                      <span>🤖</span>
                      <div>
                        <div className="font-semibold">AI Automation</div>
                        <div className="text-xs text-gray-500">Intelligent Business Tools</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
                      <span>📱</span>
                      <div>
                        <div className="font-semibold">Digital Solutions</div>
                        <div className="text-xs text-gray-500">Apps & Web Development</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Simple Links */}
              <a href="#" className="text-[11px] font-bold tracking-widest text-gray-300 hover:text-white transition-colors duration-200">
                ABOUT US
              </a>
              <a href="#" className="text-[11px] font-bold tracking-widest text-gray-300 hover:text-white transition-colors duration-200">
                CONTACT
              </a>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              
              {/* Search Icon */}
              <button className="text-white hover:text-gray-300 transition-colors duration-200 p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* User Icon */}
              <button className="text-white hover:text-gray-300 transition-colors duration-200 p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Cart Icon with Badge */}
              <button className="relative text-white hover:text-gray-300 transition-colors duration-200 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} mt-20`}>
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <span className="text-xl font-bold text-white">MENU</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-6">
            {menuItems.map((item, index) => (
              <button key={index} className="w-full text-left text-white hover:text-gray-300 py-4 border-b border-gray-800 text-sm font-semibold tracking-wider flex items-center space-x-2">
                {item.icon && <span>{item.icon}</span>}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden mt-20">
        {/* Background with transitions */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentHero.bgGradient} transition-all duration-1000`}>
          <div className="absolute inset-0 bg-black/40" />
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Content */}
            <div className="text-white space-y-6 z-10">
              {/* Category Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-xs tracking-widest font-semibold">{currentHero.category}</span>
              </div>

              {/* Main Title */}
              <div className="space-y-2">
                <p className="text-sm tracking-[0.3em] text-gray-300 font-light uppercase">
                  {currentHero.subtitle}
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                  {currentHero.title}
                </h1>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
                {currentHero.description}
              </p>
              
              {/* CTA Button */}
              <div className="flex items-center space-x-4 pt-4">
                <button className="group relative bg-white text-black px-8 py-4 text-xs font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-gray-100 shadow-xl">
                  <span className="relative z-10">{currentHero.buttonText}</span>
                </button>
                <button className="group relative bg-transparent border-2 border-white text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black">
                  LEARN MORE
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-6 pt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="font-bold">Authentic</div>
                    <div className="text-gray-400">Verified Products</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="font-bold">Fast Delivery</div>
                    <div className="text-gray-400">Global Shipping</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product Image */}
            <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
              <div className="relative group">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-pulse">
                  {currentHero.badge}
                </div>

                {/* Product Image */}
                <img
                  src={currentHero.image}
                  alt={currentHero.title}
                  className="w-full max-w-2xl h-auto object-contain transform -rotate-12 transition-all duration-700 group-hover:rotate-0 group-hover:scale-110 drop-shadow-2xl"
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between">
              
              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-12 h-2 bg-white rounded-full' 
                        : 'w-2 h-2 bg-white/40 rounded-full hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Thumbnails */}
              <div className="hidden sm:flex items-center space-x-3">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-16 h-16 rounded overflow-hidden border-2 transition-all duration-300 ${
                      index === currentSlide 
                        ? 'border-white scale-110' 
                        : 'border-gray-600 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black py-8 border-y border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide">
            <span className="font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Where Technology Meets
            </span>
            <br className="sm:hidden" />
            <span className="text-gray-300"> Lifestyle, Fitness & Tradition</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AthimartPlatform;