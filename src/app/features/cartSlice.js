import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.products = [];
    },

    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseAmount: (state, action) => {
      const item = state.products.find(
        (product) => product.title === action.payload
      );
      item.amount++;
    },
    decreaseAmount: (state, action) => {
      const item = state.products.find(
        (product) => product.title === action.payload
      );
      item.amount--;
    },
    calculateTotal: (state) => {
      let total = 0;
      state.products.forEach((product) => {
        total += product.amount * product.price;
      });
      state.total = total;
    },
  },
});

export const {
  addToCart,
  calculateTotal,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
