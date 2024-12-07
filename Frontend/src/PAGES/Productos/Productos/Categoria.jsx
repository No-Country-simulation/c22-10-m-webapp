import { useParams } from "react-router-dom";
import { Container, Row, Stack } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { useEffect, useState } from "react";
import foto from "../../../IMAGES/WEBP/BOMBAS DE SAL 1.jpg";
import { HeartIcon } from "@heroicons/react/24/solid";

export const Categoria = () => {
  // -------------------API---------------------//
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/productos/")
      .then((res) => res.json())
      .then((data) => {
        const opciones = data.map((producto) => producto); // Mapear directamente los productos
        setProductos(opciones);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);
  // -------------------API---------------------//

  const { categoria } = useParams();

  // Mapeo de categorías con sus respectivos IDs
  const categoriasMap = {
    "bombas-de-sal": 1,
    "jabones-artesanales": 2,
  };

  // Obtener el ID de la categoría desde la ruta dinámica
  const categoriaId = categoriasMap[categoria];

  // Filtrar los productos por el ID de la categoría
  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === categoriaId
  );

  // Capitalizar y formatear el nombre de la categoría solo para mostrar
  const categoriaFormateada = categoria
    .replace(/-/g, " ") // Reemplazar guiones por espacios
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalizar la primera letra de cada palabra

  return (
    <article style={{ height: "82vh", width: "100%" }}>
      <Container className="h-100 w-75 p-0">
        <Row className="h-25 w-100 m-0 align-items-center fs-2">
          {categoriaFormateada}
        </Row>

        <Row className="h-75 w-100 m-0">
          {productosFiltrados.length > 0 ? (
            <Stack direction="horizontal" gap={5}>
              {productosFiltrados.map((producto, index) => (
                <Figure
                  key={index}
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  className="w-25 m-0"
                >
                  <button className="btn-card-favorito">
                    <HeartIcon
                      style={{
                        stroke: "white",
                        color: "transparent",
                      }}
                    />
                  </button>
                  <Figure.Image
                    alt="171x180"
                    src={foto}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      margin: "0",
                    }}
                  />
                  <Figure.Caption
                    style={{
                      position: "absolute",
                      bottom: "10px", // O donde prefieras posicionarlo
                      left: "10px", // También puedes usar `right`, `top`, etc.
                      background: "rgba(0, 0, 0, 0.7)", // Fondo oscuro semitransparente para destacar el texto
                      color: "white",
                      padding: "5px",
                      borderRadius: "4px", // Estilo opcional
                      fontSize: "0.9rem", // Tamaño de texto ajustado
                    }}
                  >
                    {producto.nombre}
                  </Figure.Caption>{" "}
                </Figure>
              ))}
            </Stack>
          ) : (
            <p>No hay productos disponibles en esta categoría.</p>
          )}
        </Row>
      </Container>
    </article>
  );
};
