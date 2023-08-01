import "./globals.css";
import "./swiperjs.css";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import Image from "next/image";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sasta Indonesia Coffee",
  description:
    "Sasta Indonesia Coffee was founded to share a passion for producing high-quality coffee. Our team of experienced coffee producers carefully selects and roasts our beans to perfection, ensuring a rich and flavorful cup of coffee every time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
