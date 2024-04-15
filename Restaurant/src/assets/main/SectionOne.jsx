import { useState, useEffect } from "react";
import "./Main.css";

const images = [
  "./restaurant-4011989_1280.jpg",
  "./platter-2009590_1280.jpg",
  "./restaurant-4011989_1280.jpg",
];

function SectionOne() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${images[activeIndex]})`,
  };

  return (
    <section className="main-section" style={backgroundStyle}>
      <article className="content">
        <h2>Lorem ipsum dolor sit amet</h2>
        <h1>Hello</h1>
        <p>
          Consectetur adipisicing elit. Veritatis corporis placeat esse minima
          sunt ullam blanditiis magni aliquam, inventore tempora cumque
          assumenda asperiores aspernatur rem fugiat veniam ad sequi porro!
        </p>
      </article>
    </section>
  );
}

export default SectionOne;
