import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiTrash2, FiEdit, FiShoppingCart } from "react-icons/fi";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  updateItem,
  fixCartData
} from "../Features/CartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();
const navigate =  useNavigate()

  useEffect(() => {
    dispatch(fixCartData());
  }, [dispatch]);

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.price || 0) * (item.quantity || 1),
    0
  );

  const handleEdit = (item) => {
    const newName = prompt("Enter new name", item.name);
    const newPrice = prompt("Enter new price", item.price);
const newImage = prompt("Enter new image URL", item.image);
    if (newName && newPrice && newImage) {
      dispatch(
        updateItem({
          id: item.id,
          name: newName,
          price: newPrice,
        image: newImage,
          
        })
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ec] to-[#dfe7db] px-4 py-10">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#4C643B] p-3 rounded-xl text-white shadow-lg">
            <FiShoppingCart size={22} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2f3e2c]">
              Shopping Cart
            </h1>
            <p className="text-gray-500 text-sm">
              Manage your selected items
            </p>
          </div>
        </div>

        <div className="bg-white px-4 py-2 rounded-lg shadow font-semibold text-[#4C643B]">
          {cartItems.length} Items
        </div>
      </div>

      {/* Empty */}
      {cartItems.length === 0 && (
        <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow text-center">
          <FiShoppingCart className="text-5xl mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-[#4C643B]">
            Your cart is empty
          </h2>
        </div>
      )}

      {/* Items */}
      {cartItems.length > 0 && (
        <>
          <div className="max-w-5xl mx-auto space-y-6">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col md:flex-row items-center justify-between gap-6"
              >

                {/* Product */}
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <img
                    src={item.image}
                    className="w-24 h-24 rounded-xl object-cover border"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-[#2f3e2c]">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center bg-gray-100 rounded-xl px-3 py-1 shadow-inner">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="px-3 text-lg font-bold hover:text-[#4C643B]"
                  >
                    -
                  </button>

                  <span className="px-3 font-semibold text-[#2f3e2c]">
                    {item.quantity || 1}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="px-3 text-lg font-bold hover:text-[#4C643B]"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <p className="text-lg font-bold text-[#4C643B]">
                  $
                  {(
                    parseFloat(item.price || 0) *
                    (item.quantity || 1)
                  ).toFixed(2)}
                </p>

                {/* Actions */}
                <div className="flex gap-4 text-xl">
                  <FiEdit
                    onClick={() => handleEdit(item)}
                    className="text-blue-500 cursor-pointer hover:scale-110 transition"
                  />
                  <FiTrash2
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 cursor-pointer hover:scale-110 transition"
                  />
                </div>

              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6">

            <div className="flex justify-between mb-3 text-gray-600">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-3 text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-xl font-bold text-[#2f3e2c] mb-5">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button
            onClick={() => navigate("/CheckOut")}
            className="w-full bg-[#4C643B] text-white py-3 rounded-xl font-semibold hover:bg-[#3b4f2f] transition">
              Proceed to Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
};

export default CartPage;