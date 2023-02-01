import blackStratXLogo from '../Images/blackStratXLogo.svg';

function Footer() {
  const year = new Date().getFullYear();

  const nav1 = ['Home', 'About', 'Contact Us', 'Pricing', 'Glossary'];
  const nav2 = [
    'Tutorials',
    'FAQs',
    'Privacy Policy',
    'Terms & conditions',
    'Join our discord',
  ];

  return (
    <div className='main-container'>
      <div className='footer'>
        <div className='footer_section'>
          <div>
            {' '}
            <img src={blackStratXLogo.src} alt='blackStratXLogo' />
          </div>
          <div className='footer_nav_items'>
            <div>
              {nav1.map((navItem, index) => (
                <p key={index} className='cursor_pointer'>
                  {navItem}
                </p>
              ))}
            </div>
            ,{' '}
            <div>
              {nav2.map((navItem, index) => (
                <p key={index} className='cursor_pointer'>
                  {navItem}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>
              START DATA DRIVEN,
              <br /> AUTOMATED INVESTING{' '}
            </p>
            <button className='secondary-button'>GET STARTED</button>
          </div>
        </div>
        <div  style={{ marginTop: '30px' }}>
          {`©${year} Aikido Finance all rights reserved. This website is operated by
        Life Unlocked Ltd. Aikido Finance is a publisher and a technology
        platform, not a registered broker-dealer or registered investment
        adviser, and does not provide investment advice. Investing involves risk
        and investments may lose value. Past performance is not indicative of
        future results. Seek appropriate financial, taxation and legal advice
        before making any investments.Copyright© Aikido Finance ${year}`}
        </div>
      </div>
    </div>
  );
}

export default Footer;