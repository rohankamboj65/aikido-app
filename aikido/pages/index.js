import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar";
import Accordion from "@/Components/Accordian";
import { faq_pricing_page } from "@/Constants";
import curveBlackImage from '../Images/curveBlackImage.png'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="investBackground">

      <Accordion data={faq_pricing_page} />

      {/* Get essential investing tips */}
      <div
      className=""
        style={{
          width: "100%",
          textAlign: 'center',
          // alignItems: "center",
          // justifyContent: "center",
          margin: "20px 0",
          // gap: "10px",
          color: 'white',
          
        

        }}
      >
          
        <div >
          <p style={{ fontWeight: 600, fontSize: "50px", margin: 0 }}>
            GET ESSENTIAL <br /> INVESTING TIPS
          </p>
          <p style={{ fontWeight: 400, fontSize: "14px" ,margin:0 }}>
            SUBSCRIBE TO OUR NEWSLETTER FOR FREE TODAY
          </p>
        </div>
        <div className=""
          // style={{
          //   // display: 'flex',
          //   gap: "10px",
          //   backgroundImage: `url(${curveBlackImage.src})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   width: "100%",
          //   height: "100vh",
          // }}
        >
          <input
            type="email"
            placeholder="Enter your e-mail address"
            style={{ height: "30px" }}
          />
          <button className="primary-button">SIGN UP</button>
        </div>
      </div>
      </div>

     
    </>
  );
}
