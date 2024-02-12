import { CartSliceProp, CartType } from "@/Types/EcommerceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartSliceProp = {
  cart: [],
  tax:5
};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    incrementData: (state, action) => {
      const productId = action.payload.item.id;
      state.cart = state.cart.map((item) => {
        if (productId === item.id) {
          return { ...item, total: item.total + 1, sum: item.price * (item.total + 1) };
        } else {
          return item;
        }
      });
    },

    decrementData: (state, action) => {
      state.cart = state.cart.map((item) => (action.payload === item.id && item.total > 1 ? { ...item, total: item.total - 1, sum: item.price * (item.total - 1) } : item));
    },

    removeCartData: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    addToCartData: (state, action) => {
      const productId = action.payload.item.id;
      if (state.cart.findIndex((product) => product.id === productId) !== -1) {
        state.cart = state.cart.reduce((cartAcc: CartType[], product) => {
          if (product.id === productId) {
            cartAcc.push({ ...product, total: product.total + action.payload.quantity, sum: product.price * (product.total + action.payload.quantity) });
          } else {
            cartAcc.push(product);
          }
          return cartAcc;
        }, []);
      } else {
        state.cart = [...state.cart, { ...action.payload.item, total: action.payload.quantity, sum: action.payload.item.price * action.payload.item.total }];
      }
    },
  },
});
export const { incrementData, decrementData, removeCartData, addToCartData } = CartSlice.actions;

export default CartSlice.reducer;
