"use client";

import React from "react";
import Image from "next/image";
import { ProductDetailsT } from "@/entities/product/model/types";
import TrashIcon from "@/shared/assets/icons/trash.svg";
import styles from "./CartItem.module.css";
import imgTumbnail from "../../../../public/images/image-product-1-thumbnail.jpg";
import { useAppDispatch } from "@/shared/lib/hooks";
import { removeFromCart } from "@/entities/cart";

type Props = {
  item: ProductDetailsT;
  amount: number;
  total: number;
};

const CartItem: React.FC<Props> = (props) => {
  const { item, amount, total } = props;
  const dispatch = useAppDispatch();

  const onRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className={styles.cartItem}>
      <Image src={imgTumbnail} alt="" />
      <div>
        <h4>{item.name}</h4>
        <p>
          {`${item.currency}${item.price.toFixed(2)}`} x {amount}{" "}
          <span className={styles.cartTotal}>
            {`${item.currency}${total.toFixed(2)}`}
          </span>
        </p>
      </div>
      <button
        type="button"
        className={styles.cartRemoveBtn}
        onClick={onRemoveFromCart}
      >
        <TrashIcon
          stroke="currentColor"
          fill="currentColor"
          width="1rem"
          height="1rem"
        />
      </button>
    </div>
  );
};

export default CartItem;
