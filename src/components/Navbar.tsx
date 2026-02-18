import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaHatWizard } from "react-icons/fa";
import { GiScrollQuill } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Schedule", path: "/schedule" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <FaHatWizard className="logo-icon" />
          <span className="logo-text">TECHSTROM 26</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <Link
                to={link.path}
                className={`nav-links ${location.pathname === link.path ? "active-link" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <a
              href="https://forms.gle/cZPikaWwB6yRinDd6"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-links register-btn"
              onClick={() => setIsOpen(false)}
            >
              Register <GiScrollQuill className="register-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
