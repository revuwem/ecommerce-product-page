"use client";

import React from "react";
import { Button } from "@/shared/ui";
import CartIcon from "@/shared/assets/icons/cart.svg";
import { useAppDispatch } from "@/shared/lib/hooks";
import { addToCart } from "@/entities/cart";
import { ProductDetailsT } from "@/entities/product";

type Props = {
  item: ProductDetailsT;
  amount: number;
};

const AddToCartButton: React.FC<Props> = ({ item, amount }) => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(addToCart({ item, amount }));
  };

  return (
    <Button onClick={() => onClick()}>
      <CartIcon stroke="currentColor" width="1rem" height="1rem" /> Add to cart
    </Button>
  );
};

export default AddToCartButton;
