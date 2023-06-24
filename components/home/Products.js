import styles from "../../styles/home/Products.module.css";

import Account from "../../public/products/account.png";
import BNPL from "../../public/products/bnpl.png";
import CC from "../../public/products/cc.png";
import Loan from "../../public/products/loan.png";

import Card from "./Card";

export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h4>Products on ZET</h4>
        <p>We are trusted by best brand in the country</p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className={styles.products}>
        <Card
          title="CREDIT CARDS"
          subtitle="100% Contactless Application Process with Instant Approval From Top Banks."
          imgSrc={CC}
          color={"#edffec"}
        />
        <Card
          title="LOANS"
          subtitle="100% online process. Instant offers. Affordable Rate of Interest on loans."
          imgSrc={Loan}
          color={"#fff1ca"}
        />
        <Card
          title="BUY NOW PAY LATER"
          subtitle="Short-term financing that allows consumers to make purchases and pay for them over time."
          imgSrc={BNPL}
          color={"#ffeee7"}
        />
        <Card
          title="SAVING ACCOUNTS"
          subtitle="ZET offers range of savings account that suits your personal needs for the banking."
          imgSrc={Account}
          color={"#fff5e7"}
        />
      </div>
    </div>
  );
}
