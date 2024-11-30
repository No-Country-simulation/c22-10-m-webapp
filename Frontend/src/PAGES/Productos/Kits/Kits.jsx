import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import kitfoto from "../../../IMAGES/WEBP/spa.webp";
import { Container, Row } from "react-bootstrap";
import { Producto } from "../Productos/Producto";

export const Kits = () => {
  const kitsDatos = [
    {
      img: kitfoto,
      nombre: "kit 1",
      kit: {
        p1: "jabon",
        p2: "aceite",
        p3: "toalla",
        p4: "crema",
      },
      parrafo:
        "El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.",
    },
    {
      img: kitfoto,
      nombre: "kit 1",
      kit: {
        p1: "jabon",
        p2: "aceite",
        p3: "toalla",
        p4: "crema",
      },
      parrafo:
        "El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.",
    },
    {
      img: kitfoto,
      nombre: "kit 1",
      kit: {
        p1: "jabon",
        p2: "aceite",
        p3: "toalla",
        p4: "crema",
      },
      parrafo:
        "El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.",
    },
    {
      img: kitfoto,
      nombre: "kit 1",
      kit: {
        p1: "jabon",
        p2: "aceite",
        p3: "toalla",
        p4: "crema",
      },
      parrafo:
        "El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.",
    },
  ];

  return (
    <Stack
      gap={5}
      className="my-5 align-items-center"
      style={{
        border: "solid black 1px",
      }}
    >
      {kitsDatos.map((kit, index) => (
        <article
          style={{
            border: "solid black 1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              alignSelf: "inherit",
            }}
          >
            {kit.nombre}
          </h2>
          <Card
            style={{
              height: "70vh",
              display: "flex",
              flexDirection: "row",
              border: "solid black 1px",
            }}
            key={index}
            className="w-75"
          >
            <Card.Img
              variant="top"
              src={kit.img}
              style={{ width: "50%", height: "100%", objectFit: "cover" }}
            />
            <Card.Body>
              <Container className="w-100 h-100">
                <Row
                  style={{ border: "solid black 1px" }}
                  className="h-25"
                ></Row>
                <Row style={{ border: "solid black 1px" }} className="h-25">
                  {" "}
                </Row>
                <Row style={{ border: "solid black 1px" }} className="h-50">
                  {" "}
                  <Card.Text>{kit.parrafo}</Card.Text>
                </Row>
              </Container>
            </Card.Body>
          </Card>
          <Producto />
        </article>
      ))}
    </Stack>
  );
};
