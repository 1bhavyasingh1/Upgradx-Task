import Image from "next/image";

import BusinessStandard from "../../public/featured/BusinessStandard.png";
import EconomicTimes from "../../public/featured/EconomicTimes.png";
import Inc42 from "../../public/featured/Inc42.png";
import mint from "../../public/featured/mint.png";
import YourStory from "../../public/featured/YourStory.png";

import styles from "../../styles/about/Featured.module.css";

export default function Featured() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Got Featured</h1>
      </div>
      <div className={styles.featured}>
        <div className={styles.featuredItem}>
          <Image src={EconomicTimes} alt="Economic Times" />
        </div>
        <div className={styles.featuredItem}>
          <Image src={Inc42} alt="Inc42" />
        </div>
        <div className={styles.featuredItem}>
          <Image src={mint} alt="mint" />
        </div>
        <div className={styles.featuredItem}>
          <Image src={YourStory} alt="Your Story" />
        </div>
        <div className={styles.featuredItem}>
          <Image src={BusinessStandard} alt="Business Standard" />
        </div>
      </div>
    </div>
  );
}
