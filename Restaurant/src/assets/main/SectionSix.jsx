import testimonials from "./testimonialsClients.json";
import Rating from "@mui/material/Rating";

function SectionSix() {
  return (
    <article>
      <section className="main-section-six">
        <h3>Testimonials</h3>
        <h2>We Love Our Customers</h2>
        <ul>
          {testimonials.testimonios.map((test, index) => (
            <li key={index}>
              <p>{test.testimonio}</p>
              <Rating
                name="hover-feedbac"
                value={test.value}
                precision={0.1}
                readOnly
              />
              <h4>{test.nombre}</h4>
            </li>
          ))}
        </ul>
      </section>
      <img
        className="camareraBanner"
        src="./terrace-7706053_1280.webp"
        alt="cmarero"
      />
    </article>
  );
}

export default SectionSix;
