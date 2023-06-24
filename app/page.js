"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Poly from "@/components/home/Poly";
import Products from "@/components/home/Products";
import Slider from "@/components/home/Slider";
import Tutorial from "@/components/home/Tutorial";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <Hero />
      <Slider />
      <Products />
      <Poly />
      <Features />
      <Tutorial />
    </main>
  );
}
