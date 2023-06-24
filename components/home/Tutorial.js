import Image from "next/image";

import Download from "../../public/downloadBtn.svg";
import Graphic from "../../public/graphic.svg";

import styles from "../../styles/home/Tutorial.module.css";

export default function Tutorial() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3>Start Earning in 3 Easy Steps</h3>
        <p>We have create the app the make your earning easy</p>
      </div>
      <div className={styles.tutorial}>
        <div className={styles.steps}>
          <p>Step 1</p>
          <h3>Download the App and Sign up as a ZET Agent</h3>
          <a href="https://play.google.com/store/apps/details?id=in.onecode.app" target="_blank">
            <Image src={Download} alt="download" />
          </a>
        </div>
        <div className={styles.video}>
          <video loop autoPlay muted controls={false}>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
        <Image src={Graphic} className={styles.graphic} alt="Graphic" />
      </div>
    </div>
  );
}
