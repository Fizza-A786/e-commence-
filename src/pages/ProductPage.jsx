

const products = [
  {
    id: 1,
    name: "Men T-Shirt",
    price: "$25",
    image: "https://i.pinimg.com/736x/62/67/5e/62675e76a1296b2eb9ff43c02c5448c4.jpg",
  },
  {
    id: 2,
    name: "Women Dress",
    price: "$45",
    image: "https://i.pinimg.com/736x/ab/2c/9a/ab2c9a89fe4aa3ed7ff2a9a019aeca40.jpg",
  },
  {
    id: 3,
    name: "Sneakers",
    price: "$60",
    image: "https://i.pinimg.com/736x/00/22/cf/0022cfee699737f201fffb0ee76a2fa1.jpg",
  },
  {
    id: 4,
    name: "Handbag",
    price: "$35",
    image: "https://i.pinimg.com/736x/22/dd/10/22dd1062d20fd226138c5eaac8888fe0.jpg",
  },
  {
    id: 5,
    name: "Watch",
    price: "$50",
    image: "https://i.pinimg.com/736x/d9/e2/d3/d9e2d3fe514c4561d257c78ba1bd022c.jpg",
  },
  {
    id: 6,
    name: "Perfume",
    price: "$40",
    image: "https://i.pinimg.com/736x/d7/87/1c/d7871c373598355c78c90425cc548a13.jpg",
  },
  {
    id: 7,
    name: "Jacket",
    price: "$70",
    image: "https://i.pinimg.com/736x/81/e1/f1/81e1f182dab05a2468070fc2f223c072.jpg",
  },
  {
    id: 8,
    name: "Heels",
    price: "$55",
    image: "https://i.pinimg.com/1200x/88/e2/52/88e252390f107593a39be569d61b2392.jpg",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#f8f9f7] px-4 py-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#4C643B]">Our Collection</h1>
        <p className="text-gray-500">Discover premium products for everyone</p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
          >

            {/* Image Section */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay Button */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button className="bg-white text-[#4C643B] px-4 py-2 rounded-full text-sm font-medium">
                  View Product
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 text-center space-y-2">
              <h3 className="font-medium text-[#4C643B] text-sm">
                {item.name}
              </h3>
              <p className="text-[#4C643B] font-semibold">{item.price}</p>

              {/* Add to Cart */}
              <button className="mt-2 w-full bg-[#4C643B] text-white py-2 rounded-xl hover:opacity-90 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}