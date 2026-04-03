import React from "react";
import { useSelector } from "react-redux";
import { FiTrash2, FiEdit, FiShoppingCart } from "react-icons/fi";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items || []);

  // ✅ Total Price Calculate
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price || 0),
    0
  );

  return (
    <div className="min-h-screen bg-[#f4f6f3] px-4 py-10">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10 flex items-center justify-between flex-wrap gap-4">

        <div className="flex items-center gap-4">
          <div className="bg-[#4C643B] p-3 rounded-xl text-white text-2xl shadow">
            <FiShoppingCart />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-[#4C643B]">
              Shopping Cart
            </h1>
            <p className="text-gray-500 text-sm">
              Review and manage your selected items
            </p>
          </div>
        </div>

        <div className="bg-white px-4 py-2 rounded-lg shadow text-[#4C643B] font-semibold">
          {cartItems.length} Items
        </div>
      </div>

      {/* ❗ Empty State */}
      {cartItems.length === 0 && (
        <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow text-center">
          <FiShoppingCart className="text-5xl mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-[#4C643B]">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-4">
            Looks like you haven’t added anything yet.
          </p>
          <button className="bg-[#4C643B] text-white px-6 py-2 rounded-lg hover:scale-105 transition">
            Continue Shopping
          </button>
        </div>
      )}

      {/* Items */}
      {cartItems.length > 0 && (
        <>
          <div className="max-w-5xl mx-auto space-y-5">

            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-md transition"
              >

                {/* Left */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <img
                    src={item.image}
                    className="w-20 h-20 rounded-lg object-cover border"
                  />

                  <div>
                    <h3 className="font-semibold text-[#4C643B]">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      ${item.price}
                    </p>

                    <div className="flex text-yellow-400 text-sm mt-1">
                      ★★★★☆
                    </div>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3 border px-3 py-1 rounded-lg bg-gray-50">
                  <button className="text-lg font-bold px-2 hover:text-[#4C643B]">
                    -
                  </button>
                  <span className="font-medium">1</span>
                  <button className="text-lg font-bold px-2 hover:text-[#4C643B]">
                    +
                  </button>
                </div>

                {/* Price */}
                <p className="font-bold text-[#4C643B] text-lg">
                  ${item.price}
                </p>

                {/* Actions */}
                <div className="flex gap-3 text-xl">
                  <FiEdit className="text-blue-500 cursor-pointer hover:scale-110 transition" />
                  <FiTrash2 className="text-red-500 cursor-pointer hover:scale-110 transition" />
                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">

            <div className="flex justify-between mb-3 text-gray-600">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-2 text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-5 text-lg">
              <span>Total Price</span>
              <span className="font-bold text-[#4C643B]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-[#4C643B] text-white py-3 rounded-lg hover:scale-[1.02] transition font-semibold">
              Proceed to Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
};

export default CartPage;