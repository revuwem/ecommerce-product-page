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
    <Image src="/images/logo.svg" alt="Sneakers" width={145} height={20} />
    {navSlot}
    {cartSlot}
    {userProfileSlot}
  </header>
);

export default LayoutHeader;
