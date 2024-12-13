import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import "./Producto.css";

export const Producto = () => {
  const { id } = useParams(); // ID del producto desde la URL
  const [producto, setProducto] = useState(null); // Estado para guardar el producto
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const { addItem } = useShoppingCart();

  useEffect(() => {
    setLoading(true); // Activamos el estado de carga
    fetch("http://127.0.0.1:8000/api/productos/") // Endpoint para obtener todos los productos
      .then((res) => res.json())
      .then((data) => {
        const productoEncontrado = data.find(
          (prod) => prod.id_producto === parseInt(id)
        ); // Filtramos por id
        setProducto(productoEncontrado); // Guardamos el producto en el estado
        setLoading(false); // Indicamos que terminó la carga
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
        setLoading(false); // Finalizamos la carga aunque ocurra un error
      });
  }, [id]);

  const enviarProducto = () => {
    const item = {
      id: producto.id_producto,
      name: producto.nombre,
      price: producto.precio,
      currency: "USD",
      quantity: 1,
      image: producto.imagen,
    };
    addItem(item);
  };

  // Si está cargando, mostramos un indicador de carga (spinner)
  if (loading) {
    return <div className="loader">Cargando...</div>; // Agrega un spinner aquí
  }

  return (
    producto && (
      <article className="producto">
        <img src={producto.imagen} alt={producto.nombre} />
        <div className="info-producto">
          <h3>{producto.nombre}</h3>
          {/* Aquí puedes agregar una representación de las estrellas */}
          <div>{producto.calificacion && `⭐ ${producto.calificacion}`}</div>
          <p>{producto.descripcion}</p>
          <div className="container-beneficios">
            <div>
              <h4>Beneficios</h4>
              <ul>
                {producto.beneficios?.map((beneficio, index) => (
                  <li key={index}>{beneficio}</li>
                ))}
              </ul>
            </div>
            <div className="ingredientes">
              <h4>Ingredientes</h4>
              <ul>
                {producto.ingredientes?.map((ingrediente, index) => (
                  <li key={index}>{ingrediente}</li>
                ))}
              </ul>
            </div>
          </div>
          <strong>PRECIO ${producto.precio}</strong>
          <div className="container-btns">
            <button>Favorito</button>
            <button onClick={() => enviarProducto()}>Agregar al carrito</button>
          </div>
        </div>
      </article>
    )
  );
};
