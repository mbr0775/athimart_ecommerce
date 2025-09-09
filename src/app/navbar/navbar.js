import { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Using placeholder images that will actually work
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&h=800&fit=crop',
      title: 'Premium Olive Oil Collection',
      subtitle: 'Pure, cold-pressed excellence',
      description: 'Discover our selection of artisanal olive oils from the finest Mediterranean groves.'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-1siZ1E6ipHvzr2gtABQCFEayX8uMXIqeQ&s',
      title: 'Luxury Oud Fragrances',
      subtitle: 'Timeless Arabian scents',
      description: 'Experience the rich, woody essence of premium oud oils and perfumes.'
    },
    {
      image: 'https://powerhouse.qa/wp-content/uploads/2024/09/IMG_8767-scaled.jpeg',
      title: 'Sports & Fitness Gear',
      subtitle: 'Gear up for greatness',
      description: 'Professional-grade equipment for athletes and fitness enthusiasts.'
    },
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
      title: 'Fashion Sale Event',
      subtitle: 'Style meets savings',
      description: 'Trendy apparel and accessories at unbeatable prices.'
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
      title: 'Mobile App Solutions',
      subtitle: 'Technology at your fingertips',
      description: 'Custom mobile applications and digital solutions for your business.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle slideshow with working auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Changed to 4 seconds for better visibility
    return () => clearInterval(interval);
  }, [slides.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-white/90 backdrop-blur-sm shadow-md border-b-2 border-gray-300'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
                Athimart
              </h1>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search products, software, services..."
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 hover:shadow-md hover:bg-gray-50"
                />
              </div>
            </div>

            {/* Desktop Right Side Icons */}
            <div className="hidden md:flex items-center space-x-2">
              {/* User Icon */}
              <button className="p-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all duration-200 group">
                <svg className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Cart Icon with Badge */}
              <button className="relative p-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all duration-200 group">
                <svg className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 002 16v6a1 1 0 001 1h1.414M7 13v8a1 1 0 001 1h8a1 1 0 001-1v-8" />
                </svg>
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full min-w-[20px] h-5 animate-pulse">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                  <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-4 pb-6 bg-white/95 backdrop-blur-md border-t border-gray-200">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-4 text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-200">
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-medium">My Account</span>
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-4 text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-200">
                <div className="flex items-center space-x-3">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 002 16v6a1 1 0 001 1h1.414M7 13v8a1 1 0 001 1h8a1 1 0 001-1v-8" />
                  </svg>
                  <span className="font-medium">Shopping Cart</span>
                </div>
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full min-w-[20px] h-5">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>

      {/* Hero Slideshow Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Slide Images */}
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                index === currentIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
              {slides[currentIndex].title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
              {slides[currentIndex].subtitle}
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 drop-shadow-md">
              {slides[currentIndex].description}
            </p>
            <button className="bg-gradient-to-r from-black to-black hover:from-gray-800 hover:to-gray-800 text-white px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg">
              Explore Now
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-[26px] bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-[26px] bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-[60px] -translate-y-[120px] flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-black scale-125 shadow-lg' 
                  : 'bg-black/50 hover:bg-black/75'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-gray-500 to-gray-900 transition-all duration-1000 ease-linear"
            style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Demo Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Premium Olive Oil", price: "$24.99", category: "Gourmet Foods", image: "https://cdn.pixabay.com/photo/2016/08/15/20/29/olive-oil-1596417_1280.jpg" },
              { name: "Fitness Tracker Pro", price: "$199.99", category: "Sports & Tech", image: "https://cdn.pixabay.com/photo/2021/11/03/05/33/fitness-band-6764739_1280.jpg" },
              { name: "Luxury Oud Perfume", price: "$149.99", category: "Fragrances", image: "https://tuzzut.com/cdn/shop/files/POSTER04.jpg?v=1712214935" }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-2xl mb-6"
                />
                <div className="mb-2">
                  <span className="text-sm text-black font-semibold bg-gray-50 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">Premium quality product with exceptional design and functionality.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <button className="bg-gradient-to-r from-black to-black hover:from-gray-800 hover:to-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;