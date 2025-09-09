'use client';

import React, { useState, useEffect } from 'react';

const Categories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Custom SVG Icons
  const SmartphoneIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );

  const LaptopIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="3" width="16" height="10" rx="1"/>
      <line x1="4" y1="21" x2="20" y2="21"/>
      <line x1="6" y1="13" x2="18" y2="13"/>
    </svg>
  );

  const WatchIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7"/>
      <polyline points="12,6 12,12 16,14"/>
      <path d="M4 12h2m14 0h2"/>
    </svg>
  );

  const HeadphonesIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  );

  const CameraIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  );

  const GamepadIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <line x1="6" y1="11" x2="10" y2="11"/>
      <line x1="8" y1="9" x2="8" y2="13"/>
      <line x1="15" y1="12" x2="15.01" y2="12"/>
      <line x1="18" y1="10" x2="18.01" y2="10"/>
      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.152A4 4 0 0 0 17.32 5z"/>
    </svg>
  );

  const ChevronRightIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <polyline points="9,18 15,12 9,6"/>
    </svg>
  );

  const categories = [
    {
      id: 1,
      title: "Electronics",
      subtitle: "Latest Tech & Gadgets",
      icon: SmartphoneIcon,
      count: "2,450+ items",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Computers",
      subtitle: "Laptops & Accessories",
      icon: LaptopIcon,
      count: "1,230+ items",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      id: 3,
      title: "Wearables",
      subtitle: "Smart Watches & Bands",
      icon: WatchIcon,
      count: "850+ items",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      id: 4,
      title: "Audio",
      subtitle: "Headphones & Speakers",
      icon: HeadphonesIcon,
      count: "675+ items",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      id: 5,
      title: "Photography",
      subtitle: "Cameras & Equipment",
      icon: CameraIcon,
      count: "420+ items",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      id: 6,
      title: "Gaming",
      subtitle: "Games & Accessories",
      icon: GamepadIcon,
      count: "980+ items",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    }
  ];

  const featuredDeals = [
    {
      id: 1,
      title: "Weekend Sale",
      discount: "Up to 70% OFF",
      description: "Limited time offers",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "New Arrivals",
      discount: "Fresh Stock",
      description: "Latest products",
      gradient: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Shop by Category
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing products across all your favorite categories
          </p>
        </div>

        {/* Featured Deals Banner */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {featuredDeals.map((deal, index) => (
            <div
              key={deal.id}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${deal.gradient} p-6 text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                <p className="text-xl font-semibold mb-1">{deal.discount}</p>
                <p className="text-sm opacity-90">{deal.description}</p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 overflow-hidden cursor-pointer ${
                  hoveredCard === category.id ? 'scale-105 -translate-y-2' : ''
                }`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-300 ${
                    hoveredCard === category.id ? 'opacity-10' : ''
                  }`}></div>
                  
                  {/* Card Content */}
                  <div className="relative p-6 z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 transform transition-all duration-300 ${
                      hoveredCard === category.id ? 'scale-110 rotate-6' : ''
                    }`}>
                      <IconComponent className={`w-8 h-8 ${category.textColor}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-3">{category.subtitle}</p>
                    <p className="text-sm font-medium text-gray-500 mb-4">{category.count}</p>
                    
                    {/* Action Button */}
                    <div className={`flex items-center justify-between transform transition-all duration-300 ${
                      hoveredCard === category.id ? 'translate-x-2' : ''
                    }`}>
                      <span className={`text-sm font-semibold ${category.textColor}`}>
                        Explore Now
                      </span>
                      <ChevronRightIcon className={`w-5 h-5 ${category.textColor} transform transition-transform duration-300 ${
                        hoveredCard === category.id ? 'translate-x-1' : ''
                      }`} />
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 rounded-full transform transition-all duration-500 ${
                    hoveredCard === category.id ? 'scale-150 opacity-20' : ''
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-lg mb-6 opacity-90">Browse our complete collection of products</p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 shadow-lg">
                View All Products
              </button>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-white bg-opacity-5 rounded-full"></div>
            <div className="absolute right-1/4 top-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;