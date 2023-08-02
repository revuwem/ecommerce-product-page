import {
  addToCart,
  removeFromCart,
  increaseProductAmount,
  decreaseProductAmount,
} from "@/shared/store/slices/cartSlice";
import { store } from "./store";
import type { RootState, AppDispatch } from "./store";

export {
  store,
  addToCart,
  removeFromCart,
  increaseProductAmount,
  decreaseProductAmount,
};
export type { RootState, AppDispatch };
