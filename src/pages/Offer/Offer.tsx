import "./Offer.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll(".offer-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="offer">
      <h1>Oferta</h1>
      <div className="offer-list">
        <div className="offer-item">
          <div className="offer-item-image">
            <img src={`${import.meta.env.BASE_URL}images/dj3000.jpg`}/>
          </div>
          <div className="offer-item-text">
            <h2>Nagłośnienie</h2>
            <p>
              Profesjonalne nagłośnienie na różnego rodzaju imprezy,
              od małych spotkań po duże wydarzenia plenerowe.
              Nasz sprzęt zapewnia doskonałą jakość dźwięku i niezawodność oraz umożliwia
              obsługę techniczną zespołów muzycznych, konferencji i innych wydarzeń.
            </p>
            <ul>
              <li>Allen & Heath dLive S7000</li>
              <li>Allen & Heath SQ-6</li>
              <li>Allen & Heath CQ18T</li>
              <li>Allen & Heath Me-1</li>
              <li>POL-AUDIO PA 212</li>
              <li>POL-AUDIO SAT 212</li>
              <li>POL-AUDIO TP 118</li>
            </ul>
          </div>
        </div>
        <div className="offer-item">
          <div className="offer-item-image">
            <img src={`${import.meta.env.BASE_URL}images/mobilka.jpg`}/>
          </div>
          <div className="offer-item-text">
            <h2>Sceny</h2>
            <p>
              Wynajem i montaż scen na różnego rodzaju wydarzenia,
              od małych konferencji po duże plenerowe koncerty.
              Wymiary oraz konfiguracje są dostosowywane do indywidualnych potrzeb klienta. Przykładowe
              konfiguracje: bramka na ekran LED, scena z zadaszeniem.
            </p>
            <ul>
              <li>ALSPAW Scena mobilna 8m x 6m</li>
              <li>ALUSTAGE Podesty sceniczne 2m x 1m (60 sztuk)</li>
              <li>ALUSTAGE Kratownica (ponad 30 metrów)</li>
              <li>Barierki eventowe (100 sztuk)</li>
            </ul>
          </div>
        </div>
        <div className="offer-item">
          <div className="offer-item-image">
            <img src={`${import.meta.env.BASE_URL}images/pointe.png`}/>
          </div>
          <div className="offer-item-text">
            <h2>Oświetlenie</h2>
            <p>
              Szeroki wachlarz oświetlenia, w tym oświetlenie sceniczne, architektoniczne
               i dekoracyjne.
              Oferujemy kompleksowe rozwiązania oświetleniowe, które podkreślą charakter
               każdego wydarzenia,
              tworząc niezapomnianą atmosferę.
            </p>
            <ul>
              <li>FLASH WashFX 1000 IP65 CRMX</li>
              <li>FLASH WASH-BE LED 740 PRO</li>
              <li>FLASH StrobeFX 1000 IP65</li>
              <li>FLASH ART BarFX 800 IP65</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}