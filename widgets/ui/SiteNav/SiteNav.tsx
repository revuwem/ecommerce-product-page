"use client";

import { useRef, useState } from "react";
import MenuIcon from "@/shared/assets/icons/menu.svg";
import CloseIcon from "@/shared/assets/icons/close.svg";
import styles from "./SiteNav.module.css";
import { useOnClickOutside } from "usehooks-ts";

const SiteNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  const toggleNav = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleClickOutside = () => {
    if (isOpen) setIsOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <>
      <nav className={[styles.nav, isOpen ? styles.open : ""].join(" ")}>
        <button
          aria-label="Open Menu"
          onClick={toggleNav}
          className={styles.toggleButton}
        >
          <MenuIcon />
        </button>

        <div ref={ref} className={styles.navContent}>
          <button
            aria-label="close nav"
            onClick={toggleNav}
            className={styles.toggleButton}
          >
            <CloseIcon />
          </button>
          <ul className={styles.navList}>
            <li className={styles.navItem}>Collections</li>
            <li className={styles.navItem}>Men</li>
            <li className={styles.navItem}>Women</li>
            <li className={styles.navItem}>About</li>
            <li className={styles.navItem}>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SiteNav;
