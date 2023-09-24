import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Kasa" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
