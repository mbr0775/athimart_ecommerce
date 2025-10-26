import React from 'react';
import { useRouter } from 'next/navigation';

const FashionStyles = () => {
  const router = useRouter();

  const categories = [
    {
      id: 1,
      title: 'Watch',
      products: 17,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
      route: '/watches'
    },
    {
      id: 2,
      title: 'Fashionista',
      products: 6,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop',
      route: '/fashionista'
    },
    {
      id: 3,
      title: 'Ethnic Wear',
      products: 4,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop',
      route: '/ethnic-wear'
    },
    {
      id: 4,
      title: 'Goggles',
      products: 10,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop',
      route: '/goggles'
    },
    {
      id: 5,
      title: 'Tote Bag',
      products: 4,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
      route: '/tote-bag'
    },
    {
      id: 6,
      title: 'Shoes',
      products: 9,
      image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=400&fit=crop',
      route: '/shoes'
    }
  ];

  const mensDressItems = [
    {
      id: 1,
      name: 'Classic White Dress Shirt',
      price: 49.99,
      originalPrice: 79.99,
      discount: 38,
      rating: 4.7,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop',
      tag: 'Best Seller',
      category: 'Shirts'
    },
    {
      id: 2,
      name: 'Slim Fit Chino Trousers',
      price: 59.99,
      originalPrice: 89.99,
      discount: 33,
      rating: 4.5,
      reviews: 278,
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=600&fit=crop',
      tag: 'Featured',
      category: 'Trousers'
    },
    {
      id: 3,
      name: 'Cotton Crew Neck T-Shirt',
      price: 24.99,
      originalPrice: 39.99,
      discount: 38,
      rating: 4.6,
      reviews: 521,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
      tag: 'Best Seller',
      category: 'T-Shirts'
    },
    {
      id: 4,
      name: 'Checkered Casual Shirt',
      price: 44.99,
      originalPrice: 69.99,
      discount: 36,
      rating: 4.4,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
      tag: 'New Arrival',
      category: 'Shirts'
    },
    {
      id: 5,
      name: 'Formal Black Trousers',
      price: 69.99,
      originalPrice: 99.99,
      discount: 30,
      rating: 4.8,
      reviews: 412,
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=600&fit=crop',
      tag: 'Trending',
      category: 'Trousers'
    },
    {
      id: 6,
      name: 'V-Neck Basic T-Shirt',
      price: 19.99,
      originalPrice: 29.99,
      discount: 33,
      rating: 4.3,
      reviews: 634,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop',
      tag: 'Best Value',
      category: 'T-Shirts'
    },
    {
      id: 7,
      name: 'Denim Blue Casual Shirt',
      price: 54.99,
      originalPrice: 84.99,
      discount: 35,
      rating: 4.6,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop',
      tag: 'Featured',
      category: 'Shirts'
    },
    {
      id: 8,
      name: 'Cargo Utility Trousers',
      price: 64.99,
      originalPrice: 94.99,
      discount: 32,
      rating: 4.5,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=500&h=600&fit=crop',
      tag: 'New Arrival',
      category: 'Trousers'
    }
  ];

  const handleCategoryClick = (route) => {
    router.push(route);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-2">
            Best For Your Categories
          </h2>
          <p className="text-black text-sm">
            Mauri quis elit sed volutibus sodales libero ac ultricies finibus
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.route)}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Image */}
              <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full bg-gray-100 shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Category Info */}
              <h3 className="text-black font-semibold text-base mb-1">
                {category.title}
              </h3>
              <p className="text-black text-sm">
                {category.products} Products
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Men's Dressing Fashion Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-3">
              Popular Men's Fashion
            </h2>
            <p className="text-black text-base max-w-2xl mx-auto">
              Discover our trending collection of men's apparel featuring premium shirts, trousers, and t-shirts
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mensDressItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Tag Badge */}
                  <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.tag}
                  </div>
                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    -{item.discount}%
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Category */}
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">
                    {item.category}
                  </p>
                  
                  {/* Product Name */}
                  <h3 className="text-black font-semibold text-base mb-2 line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < Math.floor(item.rating) ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-600 text-xs">
                      ({item.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-black font-bold text-xl">
                      ${item.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${item.originalPrice}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionStyles;