import React from "react";
import { ProductDetailsT } from "@/entities/product";

type Props = {
  data: ProductDetailsT;
};

const ProductDetails: React.FC<Props> = ({ data }) => {
  const { brand, name, description, price, oldPrice, discount, currency } =
    data;
  return (
    <div>
      <h2>{brand}</h2>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        <span>
          {currency}
          {price}
        </span>
        <span>{discount}%</span>
      </p>
      <p>
        <s>
          {currency}
          {oldPrice}
        </s>
      </p>
    </div>
  );
};

export default ProductDetails;
