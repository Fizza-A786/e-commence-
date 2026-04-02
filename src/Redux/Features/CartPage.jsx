import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiTrash2, FiEdit } from "react-icons/fi";
import {
  increaseQty,
  decreaseQty,
  removeItem,
  updateQty,
} from "./CartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // ✅ EDIT STATE
  const [editItem, setEditItem] = useState(null);
  const [qty, setQty] = useState(1);

  // 💰 Total Price
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + parseInt(item.price.replace("$", "")) * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-[#f8f9f7] px-4 py-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-[#4C643B]">
          Your Cart 🛒
        </h1>
        <p className="text-gray-500 mt-2">
          Review your selected items
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center mt-20 text-gray-500">
          <p className="text-lg">Your cart is empty 🛒</p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition flex items-center gap-5"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-[#4C643B]">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-end gap-4">

                  <p className="font-bold text-[#4C643B]">
                    ${parseInt(item.price.replace("$", "")) * item.quantity}
                  </p>

                  <div className="flex gap-3">

                    {/* ✏️ EDIT */}
                    <button
                      onClick={() => {
                        setEditItem(item);
                        setQty(item.quantity);
                      }}
                      className="text-blue-500 hover:scale-110 transition"
                    >
                      <FiEdit />
                    </button>

                    {/* ❌ REMOVE */}
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="text-red-500 hover:scale-110 transition"
                    >
                      <FiTrash2 />
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT */}
          <div className="bg-white p-6 rounded-2xl shadow h-fit sticky top-24">

            <h2 className="text-xl font-semibold text-[#4C643B] mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-4">
              <span>Total Price</span>
              <span className="font-semibold text-[#4C643B]">
                ${totalPrice}
              </span>
            </div>

            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-full border p-2 rounded-lg mb-3 text-sm"
            />

            <button className="w-full bg-[#4C643B] text-white py-3 rounded-xl hover:scale-105 transition shadow">
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}

      {/* 🔥 EDIT MODAL */}
      {editItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-80 shadow-lg">

            <h2 className="text-lg font-semibold mb-4 text-center">
              Edit Quantity
            </h2>

            {/* Product */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={editItem.image}
                className="w-14 h-14 rounded"
              />
              <div>
                <p className="text-sm font-medium">
                  {editItem.name}
                </p>
                <p className="text-xs text-gray-500">
                  {editItem.price}
                </p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex justify-center items-center gap-4 mb-4">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span className="text-lg font-medium">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setEditItem(null)}
                className="flex-1 border py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  dispatch(updateQty({ id: editItem.id, quantity: qty }));
                  setEditItem(null);
                }}
                className="flex-1 bg-[#4C643B] text-white py-2 rounded"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}