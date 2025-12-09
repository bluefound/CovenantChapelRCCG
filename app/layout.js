import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import OneSignal from "@/components/OneSignal";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "RCCG Covenant Chapel Mega Zone - A Family of Love",
  description: "Join Covenant Chapel Mega Zone, a loving RCCG parish where lives are transformed. Sunday Service 9AM. A Church Filled With Love. Welcome home!",
  keywords: "RCCG, Redeemed Christian Church of God, Covenant Chapel, Mega Zone, Church, Christianity, Worship",
  authors: [{ name: "Covenant Chapel Mega Zone" }],
  openGraph: {
    title: "RCCG Covenant Chapel Mega Zone - A Family of Love",
    description: "Join Covenant Chapel Mega Zone, a loving RCCG parish where lives are transformed. Sunday Service 9AM. Welcome home!",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable}`}>
        <OneSignal />
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
