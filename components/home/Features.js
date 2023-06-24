import Image from "next/image";

import Stripes from "../../public/stripes.png";
import Hero from "../../public/whyUsHero.png";
import Investment from "../../public/icons/investment.svg";
import Payout from "../../public/icons/quickPayout.svg";
import Earnings from "../../public/icons/earnings.svg";
import Books from "../../public/icons/books.svg";
import Support from "../../public/icons/support.svg";
import Products from "../../public/icons/financialProduct.svg";

import styles from "../../styles/home/Features.module.css";

export default function Features() {
  return (
    <div className={styles.container}>
      <Image src={Stripes} className={styles.stripes} alt="Stripes" />
      <div className={styles.hero}>
        <h3>
          Why <span style={{ color: "#145cc5" }}>Choose us</span>
        </h3>
        <p>Why we are loved by our customers</p>
        <Image src={Hero} alt="Hero" />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className={styles.features}>
        <div className={styles.feature}>
          <Image src={Investment} alt="Investment" />
          <h4>Zero Investment</h4>
          <p>Build your business without any investment</p>
        </div>
        <div className={styles.feature}>
          <Image src={Payout} alt="Payout" />
          <h4>Quick Payout</h4>
          <p>Direct Payout in your bank account in short time</p>
        </div>
        <div className={styles.feature}>
          <Image src={Earnings} alt="Earnings" />
          <h4>Limitless Earnings</h4>
          <p>Direct Payout in your bank account in short time</p>
        </div>
        <div className={styles.feature}>
          <Image src={Books} alt="Training" />
          <h4>Training & Upskilling</h4>
          <p>Get trained by finance and sales experts</p>
        </div>
        <div className={styles.feature}>
          <Image src={Support} alt="Support" />
          <h4>Customer Support</h4>
          <p>Access tools and content to build relationship</p>
        </div>
        <div className={styles.feature}>
          <Image src={Products} alt="Financial Products" />
          <h4>Financial Products</h4>
          <p>Trustworthy & high-rated products & categories</p>
        </div>
      </div>
    </div>
  );
}
