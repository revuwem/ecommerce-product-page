import styles from "./SiteNav.module.css";

const SiteNav = () => (
  <nav>
    <ul className={styles.navList}>
      <li className={styles.navItem}>Collections</li>
      <li className={styles.navItem}>Men</li>
      <li className={styles.navItem}>Women</li>
      <li className={styles.navItem}>About</li>
      <li className={styles.navItem}>Contact</li>
    </ul>
  </nav>
);

export default SiteNav;
