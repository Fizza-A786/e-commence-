import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    // ✅ ADD TO CART
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // ➕ INCREASE QUANTITY
    increaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );
      if (item) item.quantity += 1;
    },

    // ➖ DECREASE QUANTITY
    decreaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // ❌ REMOVE ITEM
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // ✏️ EDIT / UPDATE QUANTITY
    updateQty: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

// ✅ EXPORT ACTIONS
export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
  updateQty,
} = CartSlice.actions;

// ✅ EXPORT REDUCER
export default CartSlice.reducer;