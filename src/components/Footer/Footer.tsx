import "./Footer.css"
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="info">
          <h3>Audiomaster Grzegorz Studencki</h3>
          <p>+48 213 742 069</p>
          <p>grzegorz.studencki@audiomaster.pl</p>
          <p>warszawa ulica niebianskiego pokoju 88</p>
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com/audiomaster.pl/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100057097914895" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon"/>
          </a>
        </div>
      </div>
      <hr className="footer-separator" />
      <p className="copyright">© 2025 Audiomaster.</p>
    </footer>
  );
}
