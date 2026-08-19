import { useState } from "react";
import "./../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() => scrollToSection("home")}
      >
        <h2>PRO SHINE</h2>
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

        <li onClick={() => scrollToSection("services")}>
          Services
        </li>

        <li onClick={() => scrollToSection("gallery")}>
          Gallery
        </li>

        <li onClick={() => scrollToSection("about")}>
          About
        </li>

        <li onClick={() => scrollToSection("contact")}>
          Contact
        </li>

      </ul>

      <button
        className="book-btn"
        onClick={() => scrollToSection("packages")}
      >
        Book Now
      </button>

    </nav>
  );
}

export default Navbar;