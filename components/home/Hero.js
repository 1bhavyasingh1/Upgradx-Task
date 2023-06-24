import Image from "next/image";

import Download from "../../public/downloadBtn.svg";
import Banner from "../../public/HeroImg.png";
import styles from "../../styles/home/Hero.module.css";

export default function Hero() {
  return (
    <div data-aos="fade-up" data-aos-duration="300" className={styles.hero}>
      <div className={styles.title}>
        <h1>
          Become a Financial Advisor and{" "}
          <span style={{ color: "#264eff" }}>Earn Rs.1 Lakh/Month </span>
        </h1>
        <p>No investment required</p>
        <div className={styles.download}>
          <a href="https://play.google.com/store/apps/details?id=in.onecode.app" target="_blank">
            <Image src={Download} alt="download" />
          </a>
        </div>
      </div>
      <div className={styles.banner}>
        <Image src={Banner} width={360} height={350} alt="banner" />
      </div>
    </div>
  );
}
