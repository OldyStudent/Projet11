import "./Footer.css";
import logo from "../../../assets/images/logo-white.svg";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
