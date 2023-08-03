"use client";

import { useState } from "react";
import CartIcon from "@/shared/assets/icons/cart.svg";

import { Button } from "@/shared/ui";

import styles from "./Cart.module.css";
import { useAppSelector } from "@/shared/lib/hooks";
import {
  selectProductsInCart,
  selectProductsInCartQuantity,
} from "@/entities/cart/model/slice";
import { CartItem } from "@/entities/cart/ui";

const Cart = () => {
  const productsInCartQuantity = useAppSelector(selectProductsInCartQuantity);
  const productsInCart = useAppSelector(selectProductsInCart);
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
            {productsInCart.length > 0 && (
              <>
                <ul className={styles.dropdownList}>
                  <li>
                    {productsInCart.map((product) => (
                      <CartItem key={product.item.id} {...product} />
                    ))}
                  </li>
                </ul>
                <Button variant="primary">Checkout</Button>
              </>
            )}
            {productsInCartQuantity === 0 && <p>Your cart is empty.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
