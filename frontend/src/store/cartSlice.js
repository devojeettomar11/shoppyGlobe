import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    search: ""
  },
  reducers: {
    addToCart(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    updateQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item && action.payload.qty >= 1) {
        item.quantity = action.payload.qty;
      }
    },
    clearCart(state) {
      state.items = [];
    },
    setSearch(state, action) {
      state.search = action.payload;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  setSearch
} = cartSlice.actions;

export default cartSlice.reducer;
