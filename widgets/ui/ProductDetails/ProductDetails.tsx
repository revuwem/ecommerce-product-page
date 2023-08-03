"use client";

import React, { useCallback, useState } from "react";
import { ProductDetailsT } from "@/entities/product";
import { AddToCartButton, QuantityPicker } from "@/features/cart";
import Gallery from "@/widgets/ui/Gallery";
import styles from "./ProductDetails.module.css";

type Props = {
  data: ProductDetailsT;
};

const ProductDetails: React.FC<Props> = ({ data }) => {
  const {
    brand,
    name,
    description,
    price,
    oldPrice,
    discount,
    currency,
    images,
  } = data;

  const [productAmount, setProductAmount] = useState<number>(1);

  const onChangeAmount = useCallback((state: number) => {
    setProductAmount(state);
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {images && <Gallery data={images} />}
      </div>
      <div className={styles.container}>
        <h2 className={styles.brand}>{brand}</h2>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>
          <span>
            {currency}
            {price.toFixed(2)}
          </span>
          <span className={styles.discount}>{discount}%</span>
        </p>
        <p className={styles.oldPrice}>
          <span>
            <s>
              {currency}
              {oldPrice.toFixed(2)}
            </s>
          </span>
        </p>
        <div className={styles.cartControls}>
          <QuantityPicker onChange={onChangeAmount} />
          <AddToCartButton item={data} amount={productAmount} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
