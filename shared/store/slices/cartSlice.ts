import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ProductDetailsT } from "@/entities/product";

export interface CartState {
  products: {
    item: ProductDetailsT;
    amount: number;
  }[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      console.log("added to cart");
    },
    removeFromCart: (state) => {
      console.log("removed from cart");
    },
    // TODO: maybe no need for action, just increment the current state
    increaseProductAmount: (state, action: PayloadAction<number>) => {
      console.log("amount increased: +", action.payload);
    },
    // TODO: maybe no need for action, just decrement the current state
    decreaseProductAmount: (state, action: PayloadAction<number>) => {
      console.log("amount decreased: -", action.payload);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseProductAmount,
  decreaseProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
