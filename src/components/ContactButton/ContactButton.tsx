import { Link } from "react-router-dom";
import { LuMail } from "react-icons/lu";
import "./ContactButton.css";

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ className }) => (
  <Link to="/contact" className={`contact-button ${className || ""}`}>
    Skontakuj się z nami
    <LuMail className="MailIcon" />
  </Link>
);

export default ContactButton;