import React from "react";
import Image from "next/image";
import styles from "./LayoutHeader.module.css";

type Props = {
  navSlot: React.ReactNode;
  cartSlot: React.ReactNode;
  userProfileSlot: React.ReactNode;
};

const LayoutHeader: React.FC<Props> = ({
  navSlot,
  cartSlot,
  userProfileSlot,
}) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Image src="/images/logo.svg" alt="Sneakers" width={145} height={20} />
    </div>
    <div className={styles.nav}>{navSlot}</div>
    <div className={styles.cart}>{cartSlot}</div>
    <div className={styles.user}>{userProfileSlot}</div>
  </header>
);

export default LayoutHeader;
