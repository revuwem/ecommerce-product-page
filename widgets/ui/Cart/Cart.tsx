"use client";

import { useState } from "react";
import CartIcon from "@/shared/assets/icons/cart.svg";
import TrashIcon from "@/shared/assets/icons/trash.svg";
import Image from "next/image";
import { Button } from "@/shared/ui";
import imgTumbnail from "../../../public/images/image-product-1-thumbnail.jpg";
import styles from "./Cart.module.css";
import { useAppSelector } from "@/shared/lib/hooks";
import { selectProductsInCartQuantity } from "@/entities/cart/model/slice";

const Cart = () => {
  const productsInCartQuantity = useAppSelector(selectProductsInCartQuantity);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={styles.dropdown}>
      <button
        type="button"
        className={styles.dropdownButton}
        onClick={() => toggleDropdown()}
      >
        <CartIcon stroke="currentColor" width="1rem" height="1rem" />
        {productsInCartQuantity > 0 && (
          <span className={styles.cartIndicator}>{productsInCartQuantity}</span>
        )}
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <h3>Cart</h3>
          <div className={styles.divider} />
          <div className={styles.dropdownContent}>
            <ul className={styles.dropdownList}>
              <li>
                <div className={styles.cartItem}>
                  <Image src={imgTumbnail} alt="" />
                  <div>
                    <h4>Fall Limited Edition Sneakers</h4>
                    <p>
                      $125.00 x 3{" "}
                      <span className={styles.cartTotal}>$375.00</span>
                    </p>
                  </div>
                  <button type="button" className={styles.cartRemoveBtn}>
                    <TrashIcon
                      stroke="currentColor"
                      fill="currentColor"
                      width="1rem"
                      height="1rem"
                    />
                  </button>
                </div>
              </li>
            </ul>
            <Button variant="primary">Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
