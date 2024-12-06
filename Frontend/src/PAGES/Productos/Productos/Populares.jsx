import { Link } from "react-router-dom";
import "./Populares.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card_img from "../../../IMAGES/WEBP/image.png";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { Stack } from "react-bootstrap";
export const Populares = () => {
  const datosPopu = [
    { img: card_img, nombre: "aceite granol", precio: "3000" },
    { img: card_img, nombre: "aceite granol", precio: "3000" },
    { img: card_img, nombre: "aceite granol", precio: "3000" },
    { img: card_img, nombre: "aceite granol", precio: "3000" },
    { img: card_img, nombre: "aceite granol", precio: "3000" },
    { img: card_img, nombre: "aceite granol", precio: "3000" },
  ];
  return (
    <section className="container-pop">
      <h1>Articulos Populares</h1>
      <section>
        {datosPopu.map((producto, index) => (
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
              style={{ minHeight: "55%" }}
            />
            <Card.Body className="d-flex flex-column justify-content-evenly">
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>{producto.precio}</Card.Text>
              <Stack
                direction="horizontal"
                className="d-flex justify-content-between container-btns-pop"
              >
                <Button>Comprar</Button>
                <Button variant="primary">
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
