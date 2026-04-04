import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Features/CartSlice";

const CheckOut = () => {

  const cartItems = useSelector((state) => state.cart.items || []);

const dispatch = useDispatch()
const navigate = useNavigate()
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + Number(item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ec] to-[#dfe7db] py-10 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h1 className="text-2xl font-bold text-[#2f3e2c] mb-6">
            Checkout Details
          </h1>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C643B]"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C643B]"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C643B]"
            />

            <select className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C643B]">
              <option>Cash on Delivery</option>
              <option>Card Payment</option>
            </select>

          </div>

          <button onClick={() => {
  alert("Aapka order place ho gaya hai 🎉");

  setTimeout(() => {
    dispatch(clearCart());
    navigate("/products");
  }, 500);
}}      className="w-full mt-6 bg-[#4C643B] text-white py-3 rounded-xl font-semibold hover:bg-[#3b4f2f] transition">
            Place Order
          </button>

        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-xl font-bold text-[#2f3e2c] mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 max-h-[300px] overflow-y-auto">

            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">

                <div className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-semibold">
                  $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

              </div>
            ))}

          </div>

          {/* TOTAL */}
          <div className="mt-6 border-t pt-4">

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-[#2f3e2c]">
              <span>Total</span>
              <span>${(totalPrice + 5).toFixed(2)}</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CheckOut;