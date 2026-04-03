import React from "react";

const ReviewProducts = () => {
  const products = [
    {
      id: 1,
      title: "Hydrating Face Cream",
      price: "$25",
      desc: "Nourishes your skin with deep hydration.",
      reviews: "★★★★☆ (120)",
      img1: "https://i.pinimg.com/1200x/01/19/a8/0119a8708b29c9a032d1b94f5936fcda.jpg",
      img2: "https://i.pinimg.com/1200x/1f/82/3b/1f823bc5dbf9215cd8a76ff747b978b7.jpg",
    },
    {
      id: 2,
      title: "Revitalizing Serum",
      price: "$35",
      desc: "Boosts skin elasticity and glow.",
      reviews: "★★★★★ (85)",
      img1: "https://i.pinimg.com/1200x/1f/82/3b/1f823bc5dbf9215cd8a76ff747b978b7.jpg",
      img2: "https://i.pinimg.com/1200x/83/a8/f8/83a8f84809a4e679adcd6c01aabbab8c.jpg",
    },
    {
      id: 3,
      title: "Gentle Cleanser",
      price: "$18",
      desc: "Removes impurities without drying.",
      reviews: "★★★★☆ (200)",
      img1: "https://i.pinimg.com/1200x/83/a8/f8/83a8f84809a4e679adcd6c01aabbab8c.jpg",
      img2: "https://i.pinimg.com/736x/fb/3a/20/fb3a20ddc109bb3d7b04a2aa58db3848.jpg",
    },
    {
      id: 4,
      title: "Brightening Toner",
      price: "$22",
      desc: "Refines pores and brightens skin.",
      reviews: "★★★★☆ (90)",
      img1: "https://i.pinimg.com/736x/fb/3a/20/fb3a20ddc109bb3d7b04a2aa58db3848.jpg",
      img2: "https://i.pinimg.com/736x/5f/e3/52/5fe3522fe48ed25387c562231641cdb2.jpg",
    },
    {
      id: 5,
      title: "Anti-Aging Night Cream",
      price: "$40",
      desc: "Reduces fine lines overnight.",
      reviews: "★★★★★ (110)",
      img1: "https://i.pinimg.com/736x/5f/e3/52/5fe3522fe48ed25387c562231641cdb2.jpg",
      img2: "https://i.pinimg.com/736x/11/a6/b1/11a6b153a7561ecbf82300e63bd60a99.jpg",
    },
    {
      id: 6,
      title: "Soothing Eye Gel",
      price: "$20",
      desc: "Refreshes tired eyes instantly.",
      reviews: "★★★★☆ (75)",
      img1: "https://i.pinimg.com/736x/11/a6/b1/11a6b153a7561ecbf82300e63bd60a99.jpg",
      img2: "https://i.pinimg.com/1200x/99/54/91/995491f2ec6b8f467e27553e7b2f5594.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Skin Care Spotlight</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
          
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 duration-300 flex flex-col items-center text-center transition-transform transform hover:scale-105 relative group overflow-hidden"
          >
            {/* Image Container with hover fade */}
            <div className="relative w-48 h-48 mb-4 " >
              <img
                src={product.img1}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              <img
                src={product.img2}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              />
            </div>

            <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.desc}</p>
            <span className="font-bold text-[#4C643B] mb-2">{product.price}</span>
            <p className="text-yellow-400">{product.reviews}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewProducts;