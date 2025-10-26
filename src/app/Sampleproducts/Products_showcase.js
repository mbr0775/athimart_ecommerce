'use client';

import React, { useState } from 'react';

const ProductsShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const products = [
    {
      id: 1,
      name: 'AI Smart Fitness Tracker',
      description: 'Advanced fitness tracking with AI-powered health insights',
      price: 'LKR 2499',
      category: 'AI-Integrated Smart Gadgets',
      features: ['Heart Rate Monitor', 'Sleep Tracking', 'AI Health Analytics'],
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Premium Agarwood Oil',
      description: 'Authentic Oud essence from Sri Lankan premium collections',
      price: 'LKR 19999',
      category: 'Traditional & Natural Essences',
      features: ['100% Pure', 'Goviceylon Partnership', 'Premium Grade'],
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'ERP Business Solution',
      description: 'Complete business management system by Tokilo Technologies',
      price: 'LKR 45,000',
      category: 'IT Solutions & Genuine Software',
      features: ['Cloud-Based', 'Multi-Platform', 'AI Integration'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Smart Home Hub',
      description: 'AI-powered home automation control center',
      price: 'LKR 14999',
      category: 'AI-Integrated Smart Gadgets',
      features: ['Voice Control', 'Smart Integration', 'Mobile App'],
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Sandalwood Essential Oil',
      description: 'Pure sandalwood oil for aromatherapy and wellness',
      price: 'LKR 8499',
      category: 'Traditional & Natural Essences',
      features: ['100% Natural', 'Therapeutic Grade', 'Sri Lankan Origin'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/525525211/EU/OH/TA/157504471/sandalwood-oil.jpg'
    },
    {
      id: 6,
      name: 'Gym Performance Monitor',
      description: 'Smart workout tracker with real-time performance analytics',
      price: 'LKR 4599',
      category: 'Sports & Gym Workout Gadgets',
      features: ['Rep Counter', 'Form Analysis', 'Progress Tracking'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'Premium Lifestyle Collection',
      description: 'Curated fashion and accessories for modern professionals',
      price: 'LKR 3800',
      category: 'Clothing, Fashion & Lifestyle',
      features: ['Premium Quality', 'Modern Design', 'Global Trends'],
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'Frankincense Resin & Oil',
      description: 'Sacred frankincense for meditation and spiritual wellness',
      price: 'LKR 12900',
      category: 'Traditional & Natural Essences',
      features: ['Premium Grade', 'Traditional Sourcing', 'Authentic Quality'],
      image: 'https://images.unsplash.com/photo-1595465473646-c5961d66cdda?w=400&h=400&fit=crop'
    },
    {
      id: 9,
      name: 'AI Smart Wearables',
      description: 'Next-gen wearable technology with advanced AI features',
      price: 'LKR 4999',
      category: 'AI-Integrated Smart Gadgets',
      features: ['Voice Assistant', 'Health Monitoring', 'Smart Notifications'],
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop'
    },
    {
      id: 10,
      name: 'Rose Otto Essential Oil',
      description: 'Premium rose oil for luxury aromatherapy experiences',
      price: 'LKR 7999',
      category: 'Traditional & Natural Essences',
      features: ['Bulgarian Rose', 'Pure Extract', 'Luxury Grade'],
      image: 'https://images.unsplash.com/photo-1587556930875-51ce4e0ac6e2?w=400&h=400&fit=crop'
    },
    {
      id: 11,
      name: 'Mobile App Development',
      description: 'Custom mobile applications by Tokilo Technologies',
      price: 'LKR 49,999',
      category: 'IT Solutions & Genuine Software',
      features: ['iOS & Android', 'Custom Design', 'Full Support'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop'
    },
    {
      id: 12,
      name: 'Smart Dumbbells',
      description: 'AI-powered adjustable dumbbells for home workouts',
      price: 'LKR 1999',
      category: 'Sports & Gym Workout Gadgets',
      features: ['Auto Weight Adjust', 'Form Tracking', 'Workout Analytics'],
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&h=400&fit=crop'
    },
    {
      id: 13,
      name: 'Premium Business Attire',
      description: 'Professional clothing collection for modern executives',
      price: 'LKR 5900',
      category: 'Clothing, Fashion & Lifestyle',
      features: ['Tailored Fit', 'Premium Fabrics', 'International Style'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop'
    },
    {
      id: 14,
      name: 'Lavender Essential Oil',
      description: 'Calming lavender oil for relaxation and sleep',
      price: 'LKR 9050',
      category: 'Traditional & Natural Essences',
      features: ['French Lavender', 'Sleep Aid', 'Stress Relief'],
      image: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=400&h=400&fit=crop'
    },
    {
      id: 15,
      name: 'Smart Connected Scales',
      description: 'AI body composition analyzer with health insights',
      price: 'LKR 3499',
      category: 'Sports & Gym Workout Gadgets',
      features: ['Body Analysis', 'App Sync', 'Progress Tracking'],
      image: 'https://images.unsplash.com/photo-1583454155184-870a1f63b6f6?w=400&h=400&fit=crop'
    },
    {
      id: 16,
      name: 'Cedarwood Essential Oil',
      description: 'Grounding cedarwood oil for meditation and focus',
      price: 'LKR 6750',
      category: 'Traditional & Natural Essences',
      features: ['Himalayan Cedar', 'Meditation Aid', 'Natural Grounding'],
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop'
    },
    {
      id: 17,
      name: 'Smart Voice Assistant',
      description: 'AI-powered voice assistant for smart home control',
      price: 'LKR 8999',
      category: 'AI-Integrated Smart Gadgets',
      features: ['Natural Language', 'Smart Home Control', 'Multi-Language'],
      image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=400&fit=crop'
    },
    {
      id: 18,
      name: 'Myrrh Resin & Oil',
      description: 'Ancient myrrh for spiritual practices and wellness',
      price: 'LKR 11500',
      category: 'Traditional & Natural Essences',
      features: ['Ancient Sourcing', 'Spiritual Wellness', 'Premium Quality'],
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop'
    }
  ];

  const handleAddToCart = (productId, productName) => {
    console.log(`Added ${productName} to cart`);
    alert(`${productName} added to cart!`);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'AI-Integrated Smart Gadgets': 'bg-blue-100 text-blue-700 border-blue-200',
      'Traditional & Natural Essences': 'bg-green-100 text-green-700 border-green-200',
      'IT Solutions & Genuine Software': 'bg-purple-100 text-purple-700 border-purple-200',
      'Sports & Gym Workout Gadgets': 'bg-orange-100 text-orange-700 border-orange-200',
      'Clothing, Fashion & Lifestyle': 'bg-pink-100 text-pink-700 border-pink-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Animation */}
        <div className="text-center mb-12 opacity-0" style={{animation: 'fadeIn 1s ease-out forwards'}}>
          <div className="mb-4">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-4 shadow-lg shadow-blue-500/30" style={{animation: 'glow 2s ease-in-out infinite'}}>
              Athimart Collection
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Discover our curated collection spanning AI technology, traditional essences, 
            fitness gadgets, and premium lifestyle products - where technology meets tradition.
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto scrollbar-hide space-x-6 pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex space-x-6" style={{ width: 'max-content' }}>
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-blue-300 group opacity-0"
                  style={{
                    animation: `slideIn 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="p-6 relative">
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-500 rounded-xl"></div>
                    
                    <div className="text-center mb-4 relative overflow-hidden rounded-lg h-48 bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent z-10"></div>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover relative group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="mb-3 relative">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(product.category)}`}>
                        {product.category.split(' & ')[0]}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 relative">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm relative">
                      {product.description}
                    </p>
                    <div className="mb-4 relative">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between relative">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product.id, product.name)}
                        className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400/50 relative overflow-hidden group/btn"
                      >
                        <span className="relative z-10">Add to Cart</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover/btn:from-blue-600/20 group-hover/btn:to-purple-600/20 transition-all duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-blue-300 group cursor-pointer opacity-0"
              style={{
                animation: `slideIn 0.6s ease-out ${index * 0.1}s both`,
                transform: hoveredCard === product.id ? 'translateY(-8px)' : 'translateY(0)'
              }}
            >
              <div className="p-6 relative">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-500 rounded-xl"></div>
                
                <div className="text-center mb-4 relative overflow-hidden rounded-lg h-48 bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover relative group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="mb-3 relative">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(product.category)}`}>
                    {product.category.split(' & ')[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 relative">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm relative">
                  {product.description}
                </p>
                <div className="mb-4 relative">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between relative">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {product.price}
                  </span>
{/* Add to Cart Button */}
                <button className="group relative w-full py-2 bg-gray-900 text-white text-xs font-semibold tracking-wider uppercase overflow-hidden transition-all duration-500 hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-2xl rounded">
                  <span className="relative z-10">Add to Cart</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 opacity-0" style={{animation: 'fadeIn 1s ease-out 0.8s both'}}>
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-200 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-500"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
              Explore More Categories
            </h3>
            <p className="text-gray-600 mb-6 relative">
              Discover thousands of products across our complete range of AI gadgets, 
              traditional essences, IT solutions, and lifestyle products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <button className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400/50">
                View All Products
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 border-2 border-gray-300 hover:border-blue-400 transform hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations and hiding scrollbar on mobile */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.8);
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsShowcase;