import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: '/icon.png',
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
        {/* Minnit Chat Community Room */}
        <Script id="minnit-chat" strategy="afterInteractive">
          {`
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://minnit.chat/js/embed.js';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        <div
          id="minnit-chat-container"
          data-chatname="CovenantChapel"
          data-chatid="1"
          data-type="floating"
          data-width="350"
          data-height="500"
          style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}
        ></div>
      </body>
    </html>
  );
}
