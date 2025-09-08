// src/components/Header/Header.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img src={`${import.meta.env.BASE_URL}images/logo2.png`} className="color"/>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <nav className="nav">
          <Link to="/offer">Oferta</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/about">O firmie</Link>
        </nav>
      </header>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
