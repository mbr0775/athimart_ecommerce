'use client';

import React, { useState, useEffect } from 'react';

const Categories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Custom SVG Icons
  const LaptopIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="3" width="16" height="10" rx="1"/>
      <line x1="4" y1="21" x2="20" y2="21"/>
      <line x1="6" y1="13" x2="18" y2="13"/>
    </svg>
  );

  const SmartphoneIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );

  const WatchIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7"/>
      <polyline points="12,6 12,12 16,14"/>
      <path d="M4 12h2m14 0h2"/>
    </svg>
  );

  const EssenceIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 21a9 9 0 01-9-9c0-6 9-12 9-12s9 6 9 12a9 9 0 01-9 9z" />
    </svg>
  );

  const TreeIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M13 2L11 2V4H13V2ZM12 4C8.69 4 6 6.69 6 10C6 12.97 8.03 15 11 15V13C9.34 13 8 11.66 8 10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10C16 11.66 14.66 13 13 13V15C15.97 15 18 12.97 18 10C18 6.69 15.31 4 12 4ZM11 15H13V22H11V15Z"/>
    </svg>
  );

  const ShirtIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M20.38 3.46L16 2.81V6H8V2.81L3.62 3.46C2.68 3.6 2 4.45 2 5.4V10C2 14.97 6.48 19 12 19S22 14.97 22 10V5.4C22 4.45 21.32 3.6 20.38 3.46Z" />
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
      title: "IT Solutions & Software",
      subtitle: "Licensed software, ERP, mobile apps & AI solutions",
      icon: LaptopIcon,
      count: "500+ items",
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-100",
      textColor: "text-gray-800"
    },
    {
      id: 2,
      title: "AI-Integrated Smart Gadgets",
      subtitle: "Smart wearables, home automation, connected devices",
      icon: SmartphoneIcon,
      count: "1,000+ items",
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-100",
      textColor: "text-gray-800"
    },
    {
      id: 3,
      title: "Sports & Gym Workout Gadgets",
      subtitle: "Fitness trackers, gym tech accessories, workout tools",
      icon: WatchIcon,
      count: "800+ items",
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-100",
      textColor: "text-gray-800"
    },
    {
      id: 4,
      title: "Traditional & Natural Essences",
      subtitle: "Oud Oil, Sandalwood Oil, Frankincense & More",
      icon: EssenceIcon,
      count: "300+ items",
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-100",
      textColor: "text-gray-800"
    },
    {
      id: 5,
      title: "Agarwood Exports",
      subtitle: "Premium agarwood products in partnership with Goviceylon",
      icon: TreeIcon,
      count: "200+ items",
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-100",
      textColor: "text-gray-800"
    },
    {
      id: 6,
      title: "Clothing, Fashion & Lifestyle",
      subtitle: "Trend-driven clothing, accessories & lifestyle items",
      icon: ShirtIcon,
      count: "1,500+ items",
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-100",
      textColor: "text-gray-800"
    }
  ];

  const featuredDeals = [
    {
      id: 1,
      title: "Weekend Sale",
      discount: "Up to 70% OFF",
      description: "Limited time offers",
      gradient: "from-gray-500 to-gray-700"
    },
    {
      id: 2,
      title: "New Arrivals",
      discount: "Fresh Stock",
      description: "Latest products",
      gradient: "from-gray-500 to-gray-700"
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
          <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-lg mb-6 opacity-90">Browse our complete collection of products</p>
              <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 shadow-lg">
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