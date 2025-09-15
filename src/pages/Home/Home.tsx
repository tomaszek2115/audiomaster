import "./Home.css";
import Images from "./Images";
import "yet-another-react-lightbox/styles.css";
import { gallery } from "./gallery";
import { FaVolumeUp, FaLightbulb, FaCubes } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import { Download, Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useState, useEffect } from "react";

export default function Home() {
  const [index, setIndex] = useState<number>(-1);

  useEffect(() => {
    const items = document.querySelectorAll(".image");

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
    <div className="home">
      <div className="video">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="video-content">
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
        </div>
      </div>

      <h2>Nasze realizacje</h2>
      <Images data={gallery} onClick={(currentIndex) => setIndex(currentIndex)} />

      <Lightbox
        plugins={[Download, Fullscreen, Zoom]}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={gallery}
      />
    </div>
  );
}
