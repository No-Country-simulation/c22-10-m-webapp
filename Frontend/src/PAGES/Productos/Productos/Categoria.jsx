import { useParams } from "react-router-dom";
import { Container, Row, Stack, Figure } from "react-bootstrap";
import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

export const Categoria = () => {
  // -------------------API---------------------//
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1); // Página actual
  const productosPorPagina = 2; // Número de productos por página

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/productos/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Verifica los datos recibidos
        setProductos(data);
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
    // Añadir más categorías aquí si es necesario
  };

  // Obtener el ID de la categoría desde la ruta dinámica
  const categoriaId = categoriasMap[categoria];

  // Filtrar los productos por el ID de la categoría
  const productosFiltrados = categoriaId
    ? productos.filter((producto) => producto.categoria === categoriaId)
    : productos; // Si no hay categoría, mostrar todos los productos

  // Paginar los productos filtrados
  const productosPagina = productosFiltrados.slice(
    (paginaActual - 1) * productosPorPagina,
    paginaActual * productosPorPagina
  );

  // Calcular cuántas páginas hay en total
  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );

  // Cambiar de página
  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  // Capitalizar y formatear el nombre de la categoría solo para mostrar
  const categoriaFormateada = categoria
    ? categoria
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    : "Todos los Productos"; // Si no hay categoría, mostrar "Todos los Productos"

  return (
    <article style={{ minHeight: "82vh", width: "100%" }}>
      <Container className="h-100 w-75 p-0">
        <Row className="h-25 w-100 my-5 align-items-center fs-2">
          {categoriaFormateada}
        </Row>

        <Row className="h-75 w-100 m-0">
          {productosPagina.length > 0 ? (
            <Stack direction="horizontal" gap={5}>
              {productosPagina.map((producto, index) => (
                <Figure
                  key={index}
                  className="w-25 m-0"
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                    width: "30%",
                    height: "300px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <button
                    className="btn-card-favorito"
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      zIndex: 10,
                    }}
                  >
                    <HeartIcon
                      style={{
                        stroke: "white",
                        color: "transparent",
                      }}
                    />
                  </button>
                  <Figure.Image
                    alt={producto.nombre}
                    src={producto.imagen}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      margin: "0",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <Figure.Caption
                    className="fig-caption"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      padding: "5px",
                      borderRadius: "4px",
                      fontSize: "0.9rem",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    {producto.nombre}
                  </Figure.Caption>
                </Figure>
              ))}
            </Stack>
          ) : (
            <p>No hay productos disponibles en esta categoría.</p>
          )}

          {/* Botones de paginación */}
          <div className="d-flex justify-content-center  my-5">
            <button
              className="btn btn-primary px-4 py-2 mx-2"
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1}
              style={{
                backgroundColor: "beige",
                borderColor: "rgb(130, 119, 120)",
                color: "grey",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            >
              Anterior
            </button>
            <span
              className="mx-3"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Página {paginaActual} de {totalPaginas}
            </span>
            <button
              className="btn btn-primary px-4 py-2 mx-2"
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual === totalPaginas}
              style={{
                backgroundColor: "beige",
                borderColor: "rgb(130, 119, 120)",
                color: "grey",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            >
              Siguiente
            </button>
          </div>
        </Row>
      </Container>
    </article>
  );
};
