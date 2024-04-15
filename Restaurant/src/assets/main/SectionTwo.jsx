import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function SectionTwo() {
  return (
    <section className="main-section-two">
      <article>
        <h3>Discover</h3>
        <h2>Ordinary Food Especial</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          expedita quod eligendi explicabo dignissimos in vel repudiandae sint
          saepe facilis fuga, ipsum, deleniti voluptas tempore, eaque mollitia
          velit voluptate. Impedit.
        </p>
        <a href="#">
          Ver Menú <ArrowRightAltIcon />
        </a>
      </article>
      <article>
        <img src="./food-712665_1280.jpg" />
        <img src="./salad-1672505_1280.jpg" />
      </article>
    </section>
  );
}

export default SectionTwo;
