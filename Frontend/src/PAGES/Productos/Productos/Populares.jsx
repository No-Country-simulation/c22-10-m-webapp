import "./Populares.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { Stack } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
export const Populares = () => {
  const location = useLocation();
  const [productos, setProductos] = useState([]);
  const { addItem } = useShoppingCart();

  // Cambia el título según la ruta
  const titles = {
    "/": "Articulos populares",
    "/populares": "Productos Populares",
    "/favoritos": "Favoritos",
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/productos/")
      .then((res) => res.json())
      .then((data) => {
        const datos = data.slice(0, 6).map((caja) => ({
          nombre: caja.nombre,
          precio: caja.precio,
          img: caja.imagen,
        }));
        setProductos(datos);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);

  const title = titles[location.pathname] || "Título por defecto";

  const enviarProducto = (index) => {
    productos.forEach((prod, id) => {
      if (id === index) {
        const item = {
          id: prod.id_producto,
          name: prod.nombre,
          price: prod.precio,
          currency: "USD",
          quantity: 1,
          image: prod.img,
        };
        addItem(item);
      }
    });
  };
  return (
    <section className="container-pop">
      <h1
        style={{
          fontFamily: '"Montserrat", serif',
          fontOpticalSizing: "auto",
          fontWeight: 700,
          fontStyle: "normal",
        }}
      >
        {title}
      </h1>
      <section>
        {productos.map((producto, index) => (
          <Card
            style={{ width: "80%", height: "70vh", margin: "auto" }}
            key={index}
          >
            <button className="btn-card-favorito">
              <HeartIcon
                style={{
                  stroke: "white",
                  color: "transparent",
                }}
              />
            </button>
            <Card.Img
              variant="top"
              src={producto.img}
              style={{ minHeight: "55%", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column justify-content-evenly">
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>${producto.precio}</Card.Text>
              <Stack
                direction="horizontal"
                className="d-flex justify-content-between container-btns-pop"
              >
                <Button>Comprar</Button>
                <Button variant="primary" onClick={() => enviarProducto(index)}>
                  <ShoppingBagIcon
                    style={{
                      stroke: "white",
                      color: "transparent",
                    }}
                  />
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        ))}
      </section>
    </section>
  );
};
