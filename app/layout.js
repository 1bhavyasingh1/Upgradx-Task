import localFont from "next/font/local";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const graphie = localFont({
  src: [
    {
      path: "../public/fonts/Graphie-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphie-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "ZET: Become a Certified Financial Advisor & Earn Big",
  description: "Sell financial products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={graphie.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
