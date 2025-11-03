import { LuMail } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import "./Contact.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
      const items = document.querySelectorAll(".main-title, .card");
  
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
    <div className="contact">
      <div className="wrapper">
        <div className="main-title">
          <h1>Skontaktuj się z nami</h1>
          <p>Powiedz jak możemy Ci pomóc</p>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <LuMail className="icon" />
            <h2>Napisz do nas</h2>
            <p className="desc">Chcesz omówić szczegóły współpracy? Napisz do nas!</p>
            <p>g.studencki@audiomaster.pl</p>
          </div>
          <div className="card">
            <IoIosCall className="icon" />
            <h2>Zadzwoń do nas</h2>
            <p className="desc">Skontaktuj się i uzyskaj odpowiedzi na swoje pytania.</p>
            <p>+48 602 686 372</p>
          </div>
          <div className="card">
            <GrLocation className="icon" />
            <h2>Biuro</h2>
            <p className="desc">Siedziba naszej firmy. Operujemy na teranie Śląska i Małopolski</p>
            <p>ul. Sienkiewicza 9 34-300 Żywiec</p>
          </div>
        </div>
      </div>
    </div>
  );
}
