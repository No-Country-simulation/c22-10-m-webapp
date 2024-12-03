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
        const opciones = data.map((producto) => ({
          value: producto.nombre,
          label: producto.nombre,
          img: producto.imagen,
        }));
        setProductos(opciones);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);
  // -------------------API---------------------//
  const { categoria } = useParams();
  const categoriaFormateada = categoria
    .replace(/-/g, " ") // Reemplazamos los guiones por espacios
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalizamos la primera letra de cada palabra

  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === categoria
  );

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
                    src={producto.img}
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
{
  /* {productosFiltrados.map((producto, index) => (
                <div key={index} style={{ border: "solid black 1px" }}>
                  {producto.nombre}
                </div>
              ))} */
}
