import Image from "next/image";
import Head from "next/head";
import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Home/Card";
import PricingSection from "./components/Home/Feature";
// import ContactSection from "./components/ContactSection";
import PricingTable from "./components/Home/PricingTable";
import Feature from "./components/Home/Feature";

export default function Home() {
  return (
    <>
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WB420RF9Y3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WB420RF9Y3');
          `,
          }}
        />
      </Head>
      <Navbar />
      <Hero />

      <Card />

      <Feature />
      <PricingTable />
      <Footer />
    </>
  );
}
