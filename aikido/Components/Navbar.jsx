import whiteStratXLogo from "../Images/whiteStratXLogo.svg";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <section className="navbar-container">
      <div className="">
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">
              <img src={whiteStratXLogo.src} alt="whiteStratXLogo" />
            </div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <button className="outline-button">
              LOG IN
            </button>
            <button className="primary-button">
              SIGN UP
            </button>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
