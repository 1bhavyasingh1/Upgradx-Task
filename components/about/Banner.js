import Image from "next/image";

import Hero from "../../public/ourMission.png";
import styles from "../../styles/about/Banner.module.css";

export default function Banner() {
    return (
      <div className={styles.container}>
        <Image src={Hero} className={styles.banner} alt="Banner" />
        <div className={styles.text}>
          <h2>OUR MISSION</h2>
          <p className={styles.subtitle}>
            Enabling financial inclusion for the next billion Indians <br />
            & making their Zindagi Set. Building a platform that enables you to sell <br />
            financial products & earn up to Rs. 1 lakh every month.
          </p>
          <p className={styles.footer}>EARN BETTER. LIVE BETTER.</p>
        </div>
      </div>
    );
}