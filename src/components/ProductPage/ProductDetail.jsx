import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Features/CartSlice";
import products from "../ProductPage/Products";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
const navigate =  useNavigate()

  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-red-500 text-xl">
        Product not found ❌
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9f7] to-[#e6ece3] flex items-center justify-center px-4 py-10">

      <div className="max-w-5xl w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-6 md:p-10 grid md:grid-cols-2 gap-8">

        {/* IMAGE SECTION */}
        <div className="group relative overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col justify-center space-y-5">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#2f3e2c] leading-tight">
            {product.name}
          </h1>

          {/* Category */}
          <span className="inline-block w-fit px-3 py-1 text-xs rounded-full bg-[#4C643B]/10 text-[#4C643B]">
            {product.category}
          </span>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {product.description}
          </p>

          {/* Price */}
          <p className="text-2xl font-bold text-[#4C643B]">
            {product.price}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-3">

  {/* ADD TO CART */}
  <button
    onClick={() => {
      dispatch(addToCart(product));   // ✅ add to cart
      navigate("/cart");              // ✅ go to cart page
    }}
    className="flex-1 bg-[#4C643B] text-white py-3 rounded-xl font-semibold hover:bg-[#3b4f2f] transition-all duration-300 hover:scale-105 shadow-md"
  >
    Add to Cart
  </button>

  {/* BUY NOW */}
  <button
    onClick={() => {
      dispatch(addToCart(product));   // ✅ same process
      navigate("/cart");              // ✅ redirect
    }}
    className="flex-1 border border-[#4C643B] text-[#4C643B] py-3 rounded-xl font-semibold hover:bg-[#4C643B] hover:text-white transition-all duration-300"
  >
    Buy Now
  </button>

</div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetail;