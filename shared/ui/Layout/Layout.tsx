import React from "react";
import styles from "./Layout.module.css";

type Props = {
  headerSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ headerSlot, footerSlot, children }) => (
  <div className={styles.layout}>
    {headerSlot}
    <main>{children}</main>
    {footerSlot}
  </div>
);

Layout.defaultProps = {
  headerSlot: undefined,
  footerSlot: undefined,
};

export default Layout;
