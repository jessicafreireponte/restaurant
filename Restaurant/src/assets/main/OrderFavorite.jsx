import orderData from "./orderFavoriteJson.json";

function OrderFavorite({ number }) {
  if (!orderData || !orderData.menus || !Array.isArray(orderData.menus)) {
    return <p>Error: No se encontraron datos de menú disponibles.</p>;
  }

  // Verificar que el número de menú solicitado sea válido
  if (number < 0 || number >= orderData.menus.length) {
    return <p>Error: Menú no válido.</p>;
  }

  const menuToShow = orderData.menus[number];

  return (
    <article className="order-favorite">
      <ul>
        {menuToShow.platos.map((plato, platoIndex) => (
          <li key={platoIndex}>
            <h4>{plato.nombre}</h4>
            <p>{plato.precio.toFixed(2)}€</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default OrderFavorite;
