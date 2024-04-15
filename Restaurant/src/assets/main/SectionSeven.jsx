import blog from "./blogArticles.json";

function SectionSeven() {
  return (
    <section className="main-section-seven">
      <h3>Testimonials</h3>
      <h2>We Love Our Customers</h2>
      <ul>
        {blog.restaurantes.map((test, index) => (
          <li key={index}>
            <img src={test.imagen} />
            <h6>{test.date}</h6>
            <article>
              <h4>{test.nombre}</h4>
              <p>{test.resena}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SectionSeven;
