import React, { FC, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import RatepunkLogo from "../../../public/assets/logo.svg";
import { Common } from "@/types/common";

const Header: FC<Common> = ({ fontType }) => {
  const { className: notoClass = "" } = fontType;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.companyHeader}>
      <div className="maxContainer">
        <Image height={25} src={RatepunkLogo} alt="Company Logo" />
        <nav
          className={`${styles.nav} ${notoClass} ${
            isMenuOpen ? `${styles.transitionFromTop}` : ""
          }`}
        >
          <Link href="/">Chrome Extension</Link>
          <Link href="/about">Price Comparision</Link>
          <Link href="/contact">Blog</Link>
        </nav>
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
