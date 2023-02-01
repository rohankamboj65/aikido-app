import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/Components/Navbar';
import checkIcon from '../Images/checkIcon.svg';
import Footer from '@/Components/Footer';

export default function Home() {
  const PricePlans = [
    {
      title: 'Taster',
      tagline: 'Perfect for starting out',
      price: 'Free forever',
      benefits: [
        'Trade with paper portfolios using off the shelf strategies',
        'Try out Xplore',
      ],
      cta: {
        link: 'https://app.aikido.finance/',
        title: 'START NOW',
      },
    },
    {
      title: 'Shelf',
      tagline: 'Enjoy the ease of trading pre-built trusted strategies',
      price: '$15/month',
      benefits: [
        'Everything in Taster Plan',
        'Guided Manual Trading',
        'Online Portfolio Manager',
        'Automated Crypto Trading',
      ],
      cta: {
        link: 'https://app.aikido.finance/plans',
        title: 'TRY 1 month Free',
      },
    },
    {
      title: 'Xplore',
      tagline: 'Invent, clone and build your own investment strategies',
      price: '$25/month',
      benefits: [
        'Everything in Shelf Plan',
        'Build your own investment strategies (Stocks & ETF’s)',
      ],
      cta: {
        link: 'https://app.aikido.finance/plans',
        title: 'TRY 1 month Free',
      },
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      {/* hero-section */}

      <section className='hero_container'>
        <div className='main-container'>
          <div className='text_white padding_top'>
            <h3 className='heading_3 text_center'>
              Simple plans, low monthly prices
            </h3>
            <p className='text_center'>
              Enjoy 1 month free trial. Change or cancel your plan at any time.
            </p>
            <div className='cards_container  text_black'>
              {PricePlans?.map((item, i) => (
                <div key={i} className='pricing_card'>
                  <h3 className='heading_4 text_center'>{item.title}</h3>
                  <p className='paragraph_1 text_center'>{item.tagline}</p>
                  <div className='card_text_container text_center'>
                    <h5 className='heading_5'>{item.price}</h5>
                    <button
                      className={`${
                        item.price === 'Free forever'
                          ? 'secondary_outline'
                          : 'primary-button'
                      } btn_margin`}
                    >
                      {item.cta.title}
                    </button>
                  </div>
                  {item.benefits.map((benefit, i) => (
                    <div className='points_container'>
                      <img src={checkIcon.src} alt='checkIcon' />
                      <p className='paragraph_1'>{benefit}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className='connect_section'>
              <p style={{ fontSize: '36px', fontWeight: 500, margin: 0 }}>
                Connect
              </p>
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Send Shelf and Xplore orders
                <br />
                straight to your broker
              </p>
              <p style={{ fontSize: '30px', fontWeight: 300, margin: 0 }}>
                +$10/month
              </p>
            </div>
          </div>
        </div>
        <div className='hero_background'></div>
      </section>
      <Footer />
    </>
  );
}
