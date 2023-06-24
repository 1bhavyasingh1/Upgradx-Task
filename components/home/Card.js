import Image from "next/image";
import { Tilt } from "react-tilt";

import styles from "../../styles/home/Card.module.css";

export default function Card({ imgSrc, title, subtitle, color }) {
  return (
    <Tilt
      options={{
        max: 10,
        scale: 1.05,
        reset: true,
        transition: true,
        easing: "cubic-bezier(0.03, 0.98, 0.52, 0.99)",
      }}
      className={styles.container}
      style={{ backgroundColor: color }}
    >
        <div className={styles.image}>
          <Image src={imgSrc} alt="Card Image" />
        </div>
        <div className={styles.text}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
    </Tilt>
  );
}
