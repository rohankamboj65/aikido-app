import whiteStratXLogo from '../Images/whiteStratXLogo.svg';
import styles from '@/styles/Home.module.css';

const Navbar = () => {
  return (
    <section className='navbar-container'>
      <div>
        <div className='nav'>
          <input type='checkbox' id='nav-check' />
          <div className='nav-header'>
            <div className='nav-title'>
              <img src={whiteStratXLogo.src} alt='whiteStratXLogo' />
            </div>
          </div>
          <div className='nav-btn'>
            <label for='nav-check'>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className='nav-links'>
            <h6 className='navbar-text'>Get started now</h6>
            <div className='button-container'>
              <button className='outline-button cursor_pointer'>LOG IN</button>
              <button className='primary-button cursor_pointer'>SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
