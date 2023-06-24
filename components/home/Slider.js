"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Amex from "../../public/brands/amex.png";
import Bajaj from "../../public/brands/bajaj.png";
import BOB from "../../public/brands/bob.png";
import ICICI from "../../public/brands/icici.png";
import IDFC from "../../public/brands/idfc.png";
import IndusInd from "../../public/brands/induslnd.png";
import StandardCharted from "../../public/brands/standardchartered.png";
import YesBank from "../../public/brands/yesbank.png";

import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/home/Slider.module.css";

export default function Slider() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h4>Top Brands on ZET</h4>
        <p>We are trusted by best brand in the country</p>
      </div>
      <div className={styles.brands}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.brand}>
            <Image src={Amex} alt="Amex" />
          </SwiperSlide>
          <SwiperSlide className={styles.brand}>
            <Image src={Bajaj} alt="Bajaj" />
          </SwiperSlide>
          <SwiperSlide className={styles.brand}>
            <Image src={BOB} alt="BOB" />
          </SwiperSlide>
          <SwiperSlide className={styles.brand}>
            <Image src={ICICI} alt="ICICI" />
          </SwiperSlide>
          <SwiperSlide className={styles.brand}>
            <Image src={IDFC} alt="IDFC" />
          </SwiperSlide>
          <SwiperSlide className={styles.brand}>
            <Image src={IndusInd} alt="IndusInd" />
          </SwiperSlide>
          <SwiperSlide className={styles.brand}>
            <Image src={StandardCharted} alt="StandardCharted" />
          </SwiperSlide>
          <SwiperSlide className={styles.brand}>
            <Image src={YesBank} alt="YesBank" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
