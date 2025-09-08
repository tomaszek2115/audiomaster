// src/components/MobileMenu/MobileMenu.tsx
import { Link } from "react-router-dom";
import "./MobileMenu.css";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="mobile-menu-overlay">
      <button className="close-button" onClick={onClose}>✕</button>
      <nav className="mobile-nav">
        <Link to="/" onClick={onClose} className="logo">
          <img src={`${import.meta.env.BASE_URL}images/logo2.png`}/>
        </Link>
        <hr className="mobile-nav-divider" />
        <Link to="/offer" onClick={onClose}>Oferta</Link>
        <Link to="/contact" onClick={onClose}>Kontakt</Link>
        <Link to="/about" onClick={onClose}>O firmie</Link>
      </nav>
    </div>
  );
}
