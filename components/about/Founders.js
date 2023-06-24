"use client";

import Image from "next/image";
import { Tilt } from "react-tilt";

import Founder1 from "../../public/founders/manish.png";
import Founder2 from "../../public/founders/yash.png";
import Founder3 from "../../public/founders/lokesh.png";
import Linkedin from "../../public/social/linkedinBlack.png";

import styles from "../../styles/about/Founders.module.css";

export default function Founders() {
  var tiltOptions = {
    max: 10,
    scale: 1.05,
    reset: true,
    transition: true,
    easing: "cubic-bezier(0.03, 0.98, 0.52, 0.99)",
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>Meet Our Founders</h2>
        <p style={{ color: "#596379" }}>Few words from founders desk</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="500" className={styles.founders}>
        <Tilt options={{ ...tiltOptions }} className={styles.founder}>
          <Image src={Founder1} alt="Founder 1" />
          <div className={styles.info}>
            <div className={styles.founderText}>
              <p>Manish Sharma</p>
              <p>Founder & CEO</p>
            </div>
            <a href="https://www.linkedin.com/in/manishshara/" target="_blank">
              <Image src={Linkedin} alt="linkedin" />
            </a>
          </div>
        </Tilt>
        <Tilt options={{ ...tiltOptions }} className={styles.founder}>
          <Image src={Founder2} alt="Founder 2" />
          <div className={styles.info}>
            <div className={styles.founderText}>
              <p>Yash Desai</p>
              <p>Co-Founder</p>
            </div>
            <a href="https://www.linkedin.com/in/yash-desai-20a3b5b1/" target="_blank">
              <Image src={Linkedin} alt="linkedin" />
            </a>
          </div>
        </Tilt>
        <Tilt options={{ ...tiltOptions }} className={styles.founder}>
          <Image src={Founder3} alt="Founder 3" />
          <div className={styles.info}>
            <div className={styles.founderText}>
              <p>Lokesh Agarwal</p>
              <p>CTO</p>
            </div>
            <a href="https://www.linkedin.com/in/lokesh198/" target="_blank">
              <Image src={Linkedin} alt="linkedin" />
            </a>
          </div>
        </Tilt>
      </div>
    </div>
  );
}
