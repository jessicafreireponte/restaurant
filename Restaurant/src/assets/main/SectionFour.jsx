import { useState } from "react";
import OrderFavorite from "./OrderFavorite";
import orderData from "./orderFavoriteJson.json";
import "./Main.css"; // Asegúrate de importar tu archivo de estilos

function SectionFour() {
  const [numberIndex, setNumberIndex] = useState(null); // Usar null para inicializar como ningún menú seleccionado

  const handleMenuClick = (index) => {
    setNumberIndex(index === numberIndex ? null : index); // Alternar entre mostrar y ocultar el menú
  };

  return (
    <section className="main-section-four">
      <h2>Our Best Orders</h2>
      <ul>
        {orderData.menus.map((menu, index) => (
          <li
            key={index}
            onClick={() => handleMenuClick(index)}
            className={numberIndex === index ? "active" : ""}
          >
            <h4>{menu.titulo}</h4>
          </li>
        ))}
      </ul>
      <section className={numberIndex !== null ? "showOne" : ""}>
        {numberIndex !== null && <OrderFavorite number={numberIndex} />}
      </section>
    </section>
  );
}

export default SectionFour;
