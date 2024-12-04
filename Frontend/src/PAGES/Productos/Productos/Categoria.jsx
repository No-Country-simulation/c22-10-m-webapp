import { useParams } from "react-router-dom";
import { Container, Row, Stack } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { useEffect, useState } from "react";

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
      <Container className="h-100 w-75" style={{ border: "solid black 1px" }}>
        <Row
          className="h-25 align-items-center fs-2"
          style={{ border: "solid black 1px" }}
        >
          {categoriaFormateada}
        </Row>

        <Row className="h-75" style={{ border: "solid black 1px" }}>
          {productosFiltrados.length > 0 ? (
            <Stack direction="horizontal" gap={3}>
              {productosFiltrados.map((producto, index) => (
                <Figure
                  key={index}
                  style={{ border: "solid black 1px" }}
                  className="w-25 h-100 m-0"
                >
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={producto.imagen}
                  />
                  <Figure.Caption>{producto.nombre}</Figure.Caption>
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
