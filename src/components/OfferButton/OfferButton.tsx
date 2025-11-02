import { Link } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";
import "./OfferButton.css";

interface OfferButtonProps {
  className?: string;
}

const OfferButton: React.FC<OfferButtonProps> = ({ className }) => (
    <Link to="/offer" className={`offer-button ${className || ""}`}>
      Oferta
      <MdOutlineLocalOffer className="offer-icon" />
    </Link>
);

export default OfferButton;