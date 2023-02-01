import blackStratXLogo from '../Images/blackStratXLogo.svg';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='main-container'>
      <div className='footer'>
        <div>
          {' '}
          <img src={blackStratXLogo.src} alt='blackStratXLogo' />
        </div>
        <div>
          <p className='cursor-pointer'>Home</p>
          <p className='cursor-pointer'>About</p>
          <p className='cursor-pointer'>Contact Us</p>
          <p className='cursor-pointer'>Pricing</p>
          <p className='cursor-pointer'>Glossary</p>
        </div>
        <div>
          <p className='cursor-pointer'>Tutorials</p>
          <p className='cursor-pointer'>FAQ's</p>
          <p className='cursor-pointer'>Privacy Policy</p>
          <p className='cursor-pointer'>Terms & conditions</p>
          <p className='cursor-pointer'>Join our discord</p>
        </div>
        <div>
          <p style={{ fontWeight: 'bold' }}>
            START DATA DRIVEN,
            <br /> AUTOMATED INVESTING{' '}
          </p>
          <button className='secondary-button'>GET STARTED</button>
        </div>
      </div>
      <div>
        {`©${year} Aikido Finance all rights reserved. This website is operated by
        Life Unlocked Ltd. Aikido Finance is a publisher and a technology
        platform, not a registered broker-dealer or registered investment
        adviser, and does not provide investment advice. Investing involves risk
        and investments may lose value. Past performance is not indicative of
        future results. Seek appropriate financial, taxation and legal advice
        before making any investments.Copyright© Aikido Finance ${year}`}
      </div>
    </div>
  );
}

export default Footer;
