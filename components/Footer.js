import Image from "next/image";
import Link from "next/link";

import FooterImg from "../public/AboutUs.jpg";
import Logo from "../public/logos/logo.svg";
import LinkedIn from "../public/social/linkedin.svg";
import Instagram from "../public/social/instagram.svg";
import Facebook from "../public/social/facebook.svg";
import Telegram from "../public/social/telegram.svg";
import Whatsapp from "../public/social/whatsapp.svg";

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Image src={FooterImg} alt="footer" className={styles.background} />
      </div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <p>COMPANY</p>
            <Link href="/about">About Us</Link>
            <Link href="">Partner With Us</Link>
            <Link href="">Blog</Link>
          </div>
          <div className={styles.infoItem}>
            <p>LEGAL</p>
            <p>Privacy Policy</p>
            <p>Terms & Use</p>
          </div>
          <div className={styles.infoItem}>
            <p>CONTACT</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@zetapp.in" target="_blank">
              hi@zetapp.in
            </a>
            <a href="tel://+919991110022">+91-7417274072</a>
          </div>
          <div className={styles.infoItem}>
            <p>SOCIAL</p>
            <div className={styles.social}>
                <a href="https://www.linkedin.com/company/zetapp-in/" target="_blank">
                    <Image src={LinkedIn} alt="linkedin" />
                </a>
                <a href="https://www.instagram.com/zetapp.in/" target="_blank">
                    <Image src={Instagram} alt="instagram" />
                </a>
                <a href="https://www.facebook.com/zetapp.in/" target="_blank">
                    <Image src={Facebook} alt="facebook" />
                </a>
                <a href="https://web.telegram.org/k/#@GetOneCode" target="_blank">
                    <Image src={Telegram} alt="telegram" />
                </a>
                <a href="https://chat.whatsapp.com/HRlwYwVYRuaBuH3bRBrgMj" target="_blank">
                    <Image src={Whatsapp} alt="whatsapp" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
