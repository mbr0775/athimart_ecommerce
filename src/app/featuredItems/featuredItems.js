"use client";
import { useState, useEffect } from 'react';

function FeaturedItems() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const products = [
    {
      id: 1,
      name: "AI-Powered Smart Watch",
      rating: 5,
      price: "LKR 4990",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjiwdb7pz6Y5Sn7G4j2_c9qy5fqOCpfvF3Q&s",
      stock: "In Stock",
      category: "Fitness Technology"
    },
    {
      id: 2,
      name: "Premium Leather Jacket",
      rating: 5,
      price: "LKR 3900",
      image: "https://static.vecteezy.com/system/resources/thumbnails/050/176/149/small/brown-leather-jacket-isolated-on-transparent-background-png.png",
      stock: "In Stock",
      category: "Fashion"
    },
    {
      id: 3,
      name: "Agarwood Essential Oil",
      rating: 5,
      price: "LKR 7490",
      image: "https://m.media-amazon.com/images/I/716yZRPB5rL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
      stock: "In Stock",
      category: "Natural Essences"
    },
    {
      id: 4,
      name: "Sandalwood Oil",
      rating: 5,
      price: "LKR 9050",
      image: "https://vijayimpex.co.in/wp-content/uploads/2018/08/Sandalwood-oil.jpg",
      stock: "In Stock",
      category: "Tradition"
    },
    {
      id: 5,
      name: "AI Wireless Earbuds",
      rating: 5,
      price: "LKR 2990",
      image: "https://static.vecteezy.com/system/resources/previews/036/731/849/non_2x/ai-generated-earphone-isolated-on-transparent-background-free-png.png",
      stock: "In Stock",
      category: "Gadgets"
    },
    {
      id: 6,
      name: "Smart Yoga Mat",
      rating: 5,
      price: "LKR 1990",
      image: "https://png.pngtree.com/png-vector/20231120/ourmid/pngtree-a-green-yoga-mat-is-rolled-up-and-isolated-on-a-png-image_10457043.png",
      stock: "In Stock",
      category: "Fitness"
    },
    {
      id: 7,
      name: "AI Fitness Tracker",
      rating: 5,
      price: "LKR 3480",
      image: "https://png.pngtree.com/png-vector/20250422/ourmid/pngtree-smart-watch-white-color-png-image_16057996.png",
      stock: "In Stock",
      category: "Fitness Technology"
    },
    {
      id: 8,
      name: "Luxury Silk Scarf",
      rating: 5,
      price: "LKR 2500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpntW0Mc7SemLakMRJAuSkSp-yZbJz2pBPg&s",
      stock: "In Stock",
      category: "Fashion"
    },
    {
      id: 9,
      name: "Frankincense Oil",
      rating: 5,
      price: "LKR 8200",
      image: "https://i0.wp.com/hingelaegas.ee/wp-content/uploads/2020/10/viirukipuu-EO.png?fit=800%2C800&ssl=1",
      stock: "In Stock",
      category: "Natural Essences"
    },
    {
      id: 10,
      name: "Rosewood Essence",
      rating: 5,
      price: "LKR 6700",
      image: "https://png.pngtree.com/png-vector/20240510/ourmid/pngtree-rosewood-essential-oil-bottle-aromatherapy-bliss-luxurious-bottles-for-png-image_12435668.png",
      stock: "In Stock",
      category: "Tradition"
    },
    {
      id: 11,
      name: "Smart Home Assistant",
      rating: 5,
      price: "LKR 3999",
      image: "https://static.vecteezy.com/system/resources/previews/060/153/751/non_2x/inspired-urban-smart-home-hub-voice-assistant-no-background-with-transparent-background-perfect-clarity-free-png.png",
      stock: "In Stock",
      category: "Gadgets"
    },
    {
      id: 12,
      name: "Wireless Charging Pad",
      rating: 5,
      price: "LKR 1499",
      image: "https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-wireless-charging-pad-png-image_13137291.png",
      stock: "In Stock",
      category: "Gadgets"
    }
  ];

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(2);
      }
    };

    window.addEventListener('resize', updateItemsPerPage);
    updateItemsPerPage();

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const numPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    if (currentPage >= numPages) {
      setCurrentPage(Math.max(0, numPages - 1));
    }
  }, [numPages, currentPage]);

  const displayedProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-3 h-3 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
            FEATURED ITEMS
          </h2>
          <p className="text-lg font-medium text-gray-700 mb-2">
            Where Technology Meets Lifestyle, Fitness & Tradition
          </p>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white text-black px-4 py-2 text-xs font-bold tracking-wider uppercase rounded transition-all duration-300 transform hover:scale-105">
                    Quick View
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-semibold px-2 py-1 rounded">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                {/* Rating */}
                <div className="flex items-center justify-center mb-2 space-x-0.5">
                  {renderStars(product.rating)}
                </div>

                {/* Product Name */}
                <h3 className="text-xs font-medium text-gray-900 mb-2 line-clamp-2 min-h-[32px] group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Price */}
                <p className="text-lg font-bold text-gray-900 mb-2">
                  {product.price}
                </p>

                {/* Stock Status */}
                <div className="flex items-center justify-center space-x-1 text-xs text-green-600 mb-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{product.stock}</span>
                </div>

                {/* Add to Cart Button */}
                <button className="group relative w-full bg-black text-white py-2 text-xs font-semibold tracking-wider uppercase rounded overflow-hidden transition-all duration-500 hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-2xl">
                  <span className="relative z-10">Add to Cart</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {Array.from({ length: numPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentPage ? 'w-6 bg-gray-900' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
            ></button>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center space-x-2 bg-transparent border-2 border-black text-black px-8 py-3 text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 hover:bg-black hover:text-white">
            <span>VIEW ALL PRODUCTS</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedItems;