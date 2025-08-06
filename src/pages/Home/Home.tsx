import "./Home.css"
import { FaVolumeUp, FaLightbulb, FaCubes, } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home">
      <h1>Techniczna obsługa eventów</h1>
      <div className="intro">
        <p>
          NAGŁOŚNIENIE&nbsp;<FaVolumeUp className="icon" />
        </p>
        <p>
          SCENY&nbsp;<FaCubes className="icon" />
        </p>
        <p>
          OŚWIETLENIE&nbsp;<FaLightbulb className="icon" />
        </p>
      </div>
      <div className="gallery">
        <img src="/images/1.png"/>
        <img src="/images/2.png"/>
      </div>
    </div>
  );
}