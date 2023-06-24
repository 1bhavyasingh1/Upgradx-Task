import Image from "next/image";

import People from "../../public/people.png";
import styles from "../../styles/home/Poly.module.css";

export default function Poly() {
  return (
    <div className={styles.container}>
      <div className={styles.polygon}>
        <div className={styles.image}>
          <Image src={People} alt="People" />
        </div>
        <div className={styles.text}>
          <h4>THE ZET EFFECT</h4>
          <div className={styles.lines}>
            <p>More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans</p>
            <span className={styles.swiper}></span>
          </div>
        </div>
      </div>
    </div>
  );
}