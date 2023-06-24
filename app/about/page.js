import Image from "next/image";

import Banner from "@/components/about/Banner";
import Featured from "@/components/about/Featured";
import Investors from "@/components/about/Investors";
import Founders from "@/components/about/Founders";

import "./index.css";
import Growth from "../../public/growth.png";
import FooterImage from "../../public/AboutUsFooter.png";

export const metadata = {
  title: "ZET - About Us",
};

export default function About() {
  return (
    <main>
      <Banner />
      <div className="growth">
        <h1>How we evolved over the years</h1>
        <div className="image-container">
          <Image src={Growth} className="image" alt="Growth" />
        </div>
      </div>
      <Featured />
      <Investors />
      <Founders />
      <Image src={FooterImage} style={{ width: "100%", height: "auto" }} alt="Footer Image" />
    </main>
  );
}
