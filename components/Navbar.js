"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import LogoBlue from "../public/logos/logoBlue.svg";
import MenuIcon from "../public/icons/menuIcon.svg";
import CloseIcon from "../public/icons/closeIcon.svg";
import Download from "../public/downloadBtn.svg";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src={LogoBlue} width={100} height={50} alt="logo" />
      </Link>
      <div>
        <Image
          src={menu ? CloseIcon : MenuIcon}
          alt="menu"
          className={styles.menu}
          onClick={toggleMenu}
        />
        <div className={styles.menuItems} style={{ display: menu ? "block" : "none" }}>
          <div className={styles.container}>
            <Link href="/" className={styles.menuLink} onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className={styles.menuLink} onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="" className={styles.menuLink} onClick={toggleMenu}>
              Partner With Us
            </Link>
            <Link href="" className={styles.menuLink} onClick={toggleMenu}>
              Blog
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=in.onecode.app"
              target="_blank"
              className={styles.menuLink}
            >
              Download ZET
            </a>
            <a href="https://play.google.com/store/apps/details?id=in.onecode.app" target="_blank">
              <Image src={Download} alt="download" className={styles.menuLink} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link} style={{ color: isHome ? "#2075f0" : "#596379" }}>
          Home
        </Link>
        <Link
          href="/about"
          className={styles.link}
          style={{ color: !isHome ? "#2075f0" : "#596379" }}
        >
          About Us
        </Link>
        <Link href="" className={styles.link}>
          Partner With Us
        </Link>
        <Link href="" className={styles.link}>
          Blog
        </Link>
        <div>
          <button className={styles.button}>
            <a
              className={styles.buttonLink}
              href="https://play.google.com/store/apps/details?id=in.onecode.app"
              target="_blank"
            >
              Download ZET
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
