import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {

    // ✅ ADD TO CART (FULL FIX)
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // 🔥 price clean (string "$45" → number 45)
      const cleanPrice = parseFloat(
        action.payload.price.toString().replace("$", "")
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          price: cleanPrice,   // ✅ FIXED
          quantity: 1,         // ✅ MUST
        });
      }
    },

    // ❌ REMOVE
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // ➕ INCREASE
    increaseQty: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item) item.quantity += 1;
    },

    // ➖ DECREASE
    decreaseQty: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // ✏️ EDIT (SAFE)
    updateItem: (state, action) => {
      const { id, name, price, image } = action.payload;

      const item = state.items.find((i) => i.id === id);

      if (item) {
        item.name = name;
        item.price = parseFloat(price);
         item.image = image; // ✅ FIX
      }
    },

    // 🔥 AUTO FIX OLD DATA (IMPORTANT)
    fixCartData: (state) => {
      state.items = state.items.map((item) => ({
        ...item,
        price: parseFloat(item.price.toString().replace("$", "")) || 0,
        quantity: item.quantity || 1,
      }));
    },

  },
   clearCart: (state) => {
  state.items = [];
}
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  updateItem,
  fixCartData,
clearCart
} = CartSlice.actions;

export default CartSlice.reducer;