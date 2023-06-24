"use client";

import Image from "next/image";
import { Tilt } from "react-tilt";

import Sequoia from "../../public/investors/sequoia.png";
import Nexus from "../../public/investors/nexus.png";
import GeneralCatalyst from "../../public/investors/generalCatalyst.png";
import Waterbridge from "../../public/investors/waterbridge.png";

import Investor1 from "../../public/investors/inv1.png";
import Investor2 from "../../public/investors/inv2.png";
import Investor3 from "../../public/investors/inv3.png";
import Investor4 from "../../public/investors/inv4.png";
import Investor5 from "../../public/investors/inv5.png";
import Investor6 from "../../public/investors/inv6.png";
import Investor7 from "../../public/investors/inv7.png";
import Investor8 from "../../public/investors/inv8.png";

import styles from "../../styles/about/Investors.module.css";

export default function Investors() {
  var tiltOptions = {
    max: 10,
    scale: 1.05,
    reset: true,
    transition: true,
    easing: "cubic-bezier(0.03, 0.98, 0.52, 0.99)",
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Meet the Investors</h1>
      </div>
      <div data-aos="fade-up" data-aos-duration="500" className={styles.companies}>
        <div className={styles.company}>
          <Image src={Sequoia} alt="Sequoia" />
        </div>
        <div className={styles.company}>
          <Image src={Nexus} alt="Nexus" />
        </div>
        <div className={styles.company}>
          <Image src={GeneralCatalyst} alt="General Catalyst" />
        </div>
        <div className={styles.company}>
          <Image src={Waterbridge} alt="Waterbridge" />
        </div>
      </div>
      <div className={styles.investors}>
        <Tilt options={{ ...tiltOptions }} className={styles.investor}>
          <Image src={Investor1} alt="Investor 1" />
          <p>Kunal Shah</p>
          <p className={styles.position}>Founder, CRED</p>
        </Tilt>
        <Tilt options={{ ...tiltOptions }} className={styles.investor}>
          <Image src={Investor2} alt="Investor 2" />
          <p>Gaurav Munjal</p>
          <p className={styles.position}>Founder, UNACADEMY</p>
        </Tilt>
        <Tilt options={{ ...tiltOptions }} className={styles.investor}>
          <Image src={Investor3} alt="Investor 3" />
          <p>Aakrit Vaish</p>
          <p className={styles.position}>Co-Founder, HAPTIK</p>
        </Tilt>
        <Tilt options={{ ...tiltOptions }} className={styles.investor}>
          <Image src={Investor4} alt="Investor 4" />
          <p>Harshil Mathur</p>
          <p className={styles.position}>Founder, RAZORPAY</p>
        </Tilt>
        <Tilt options={{ ...tiltOptions }} className={styles.investor}>
          <Image src={Investor5} alt="Investor 5" />
          <p>Vidit Aatrey</p>
          <p className={styles.position}>Founder & CEO, MEESHO</p>
        </Tilt>
        <Tilt options={{ ...tiltOptions }} className={styles.investor}>
          <Image src={Investor6} alt="Investor 6" />
          <p>Amrish Rau</p>
          <p className={styles.position}>CEO, PINELABS</p>
        </Tilt>
        <Tilt options={{ ...tiltOptions }} className={styles.investor}>
          <Image src={Investor7} alt="Investor 7" />
          <p>Lalit Keshre</p>
          <p className={styles.position}>CEO, GROWW</p>
        </Tilt>
        <Tilt options={{ ...tiltOptions }} className={styles.investor}>
          <Image src={Investor8} alt="Investor 8" />
          <p>Gokul Rajaram</p>
          <p className={styles.position}>Product, DOORDASH</p>
        </Tilt>
      </div>
    </div>
  );
}
