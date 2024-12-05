import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div className="producto-details">
      <h1>{producto.nombre}</h1>
      <img
        src={Producto.imagen}
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
    </div>
  );
};
