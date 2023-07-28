"use client";

import { Button } from "@/shared/ui";
import PlusIcon from "@/shared/assets/icons/plus.svg";
import MinusIcon from "@/shared/assets/icons/minus.svg";
import { useState } from "react";
import styles from "./QuantityPicker.module.css";

const QuantityPicker = () => {
  const [qty, setQty] = useState<number>(1);

  const onDecrease = () => {
    if (qty < 2) return;
    setQty(qty - 1);
  };

  const onIncrease = () => {
    if (qty > 99) return;
    setQty(qty + 1);
  };

  return (
    <div className={styles.picker}>
      <Button variant="secondary" onClick={() => onDecrease()}>
        <MinusIcon stroke="currentColor" width="1rem" height="1rem" />
      </Button>
      <span className={styles.quantity}>{qty}</span>
      <Button variant="secondary" onClick={() => onIncrease()}>
        <PlusIcon stroke="currentColor" width="1rem" height="1rem" />
      </Button>
    </div>
  );
};

export default QuantityPicker;
