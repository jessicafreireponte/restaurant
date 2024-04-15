import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <DinnerDiningIcon
        style={{ fontSize: "48px", color: "var(--mi-color)" }}
      />
      <nav>
        <aside className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </aside>

        <ul className={isMenuOpen ? "show" : ""}>
          <li id="closeButton" onClick={toggleMenu}>
            <CloseIcon />
          </li>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menus</a>
          </li>
          <li>
            <a href="#">ContUS</a>
          </li>
          <li id="redes">
            <ol>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <YouTubeIcon />
              </li>
            </ol>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
