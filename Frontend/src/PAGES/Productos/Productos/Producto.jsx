import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Producto.css";

export const Producto = () => {
  const { id } = useParams(); // ID del producto desde la URL
  const [producto, setProducto] = useState(null); // Estado para guardar el producto

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/productos/") // Endpoint para obtener todos los productos
      .then((res) => res.json())
      .then((data) => {
        const productoEncontrado = data.find(
          (prod) => prod.id_producto === parseInt(id)
        ); // Filtramos por id
        setProducto(productoEncontrado); // Guardamos el producto en el estado
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, [id]); // Actualizamos si el id cambia

  if (!producto) {
    return <div>Cargando...</div>; // Mientras no haya datos, mostramos un mensaje
  }

  return (
    <article className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="info-producto">
        <h3>{producto.nombre}</h3>
        <div>estrellitas</div>
        <p>{producto.descripcion}</p>
        <div className="container-beneficios">
          <div>
            <h4>Beneficios</h4>
            <ul>
              <li>elemento de lista</li>
              <li>elemento de lista</li>
              <li>elemento de lista</li>
              <li>elemento de lista</li>
            </ul>
          </div>
          <div className="ingredientes">
            <h4>Ingredientes</h4>
            <ul>
              <li>elemento de lista</li>
              <li>elemento de lista</li>
              <li>elemento de lista</li>
              <li>elemento de lista</li>
            </ul>
          </div>
        </div>
        <strong>PRECIO ${producto.precio}</strong>
        <div className="container-btns">
          <button>Favorito</button>
          <button>Agregar al carrito</button>
        </div>
      </div>
    </article>
  );
};
{
  /* <div className="producto-details">
<h1>{producto.nombre}</h1>
<img
  src={producto.imagen}
  alt={producto.nombre}
  style={{ width: "100%", maxWidth: "500px" }}
/>
<p>
  <strong>Precio:</strong> ${producto.precio}
</p>
<p>
  <strong>Descripción:</strong> {producto.descripcion}
</p>
<p>
  <strong>Ingredientes:</strong>
</p>
<pre>{producto.ingredientes}</pre>
<p>
  <strong>Beneficios:</strong>
</p>
<pre>{producto.beneficios}</pre>
</div> */
}
