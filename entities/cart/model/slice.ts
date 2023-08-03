import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductDetailsT } from "@/entities/product";
import { RootState } from "@/app/store";

type CartItemT = {
  item: ProductDetailsT;
  amount: number;
};

export interface CartState {
  products: CartItemT[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemT>) => {
      const productInCart = state.products.findIndex(
        (product) => product.item.id === action.payload.item.id
      );

      if (productInCart === -1) {
        state.products.push(action.payload);
      } else {
        state.products[productInCart].amount = action.payload.amount;
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItemT["item"]>) => {
      state.products = state.products.filter(
        (product) => product.item.id !== action.payload.id
      );
    },
  },
});

export const selectProductsInCartQuantity = (state: RootState) =>
  state.cart.products.reduce((qty) => ++qty, 0);

export const { addToCart, removeFromCart } = cartSlice.actions;
