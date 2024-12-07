import { useState } from "react";
import { Stack, Card, Container, Row, Col } from "react-bootstrap";
import kitfoto from "../../../IMAGES/WEBP/spa.webp";

const ToggleButton = ({ isActive, onClick, children }) => (
  <button
    style={{
      width: "30%",
      minWidth: "max-content",
      height: "max-content",
      backgroundColor: "transparent",
      border: "none",
      borderBottom: isActive ? "1px solid black" : "none",
      color: isActive ? "rgb(254, 250, 249)" : "rgb(15, 14, 14)",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

const KitCard = ({ kit, index, kitToggles, handleToggle }) => {
  const isDay = kitToggles[index] === 0;

  return (
    <Card
      style={{
        height: "70vh",
        minWidth: "70vw",
        maxWidth: "80vw",
        display: "flex",
        flexDirection: "row",
        border: "none",
        backgroundColor: isDay ? "rgb(248, 246, 246)" : "rgb(77, 70, 71)",
        color: isDay ? "rgb(15, 14, 14)" : "rgb(254, 250, 249)",
      }}
      className="w-75"
    >
      <h5
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          color: "white",
          backgroundColor: "rgba(110, 98, 99, 0.705)",
          padding: "10px 20px",
          borderRadius: "50px",
        }}
      >
        Blom nose
      </h5>
      <Card.Img
        variant="top"
        src={isDay ? kit.dia.img : kit.noche.img}
        style={{
          width: "40%",
          height: "auto",
          objectFit: "cover",
          margin: "20px",
          borderRadius: "10px",
          boxSizing: "content-box",
        }}
      />
      <Card.Body className="m-3 p-0">
        <Container className="w-100 h-100">
          <Row className="h-25 d-flex align-items-center justify-content-evenly">
            <ToggleButton
              isActive={isDay}
              onClick={() => handleToggle(index, 0)}
            >
              Dia
            </ToggleButton>
            <ToggleButton
              isActive={!isDay}
              onClick={() => handleToggle(index, 1)}
            >
              Noche
            </ToggleButton>
          </Row>
          <Row className="h-75">
            <Row className="h-25">
              <h5>Descripción:</h5>
              <p>{isDay ? kit.dia.parrafo : kit.noche.parrafo}</p>
            </Row>
            <Row className="h-25">
              <h5>Incluye:</h5>
              <p>{isDay ? kit.dia.kit.p1 : kit.noche.kit.p1}</p>
              <p>{isDay ? kit.dia.kit.p2 : kit.noche.kit.p2}</p>
            </Row>
            <Row className="h-25 w-100 d-flex align-items-center">
              <Col xs="auto">
                <h5>Beneficios:</h5>
                <p>parrafo</p>
                <p>parrafo</p>
              </Col>
              <Col xs="auto" className="h-50 ms-auto d-flex flex-column">
                <span className="mt-auto">Precio: $50000</span>
              </Col>
            </Row>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export const Kits = () => {
  const kitsDatos = [
    {
      nombre: "kit 1",
      dia: {
        img: kitfoto,
        kit: { p1: "jabon", p2: "aceite", p3: "toalla", p4: "crema" },
        parrafo: "parrafo dia",
      },
      noche: {
        img: kitfoto,
        kit: { p1: "jabon 2", p2: "aceite 2", p3: "toalla 2", p4: "crema 2" },
        parrafo: "parrafo noche",
      },
    },
    {
      nombre: "kit 2",
      dia: {
        img: kitfoto,
        kit: { p1: "jabon", p2: "aceite", p3: "toalla", p4: "crema" },
        parrafo: "parrafo dia",
      },
      noche: {
        img: kitfoto,
        kit: { p1: "jabon 2", p2: "aceite 2", p3: "toalla 2", p4: "crema 2" },
        parrafo: "parrafo noche",
      },
    },
    {
      nombre: "kit 3",
      dia: {
        img: kitfoto,
        kit: { p1: "jabon 3", p2: "aceite 3", p3: "toalla 3", p4: "crema 3" },
        parrafo: "parrafo dia",
      },
      noche: {
        img: kitfoto,
        kit: { p1: "jabon 2", p2: "aceite 2", p3: "toalla 2", p4: "crema 2" },
        parrafo: "parrafo noche",
      },
    },
  ];

  const [kitToggles, setKitToggles] = useState(
    new Array(kitsDatos.length).fill(0)
  );

  const handleToggle = (index, value) => {
    const updatedToggles = [...kitToggles];
    updatedToggles[index] = value;
    setKitToggles(updatedToggles);
  };

  return (
    <section>
      <h1 style={{ padding: "5vh 0 0 15vw" }}>Kits</h1>
      <Stack gap={5} className="my-5 align-items-center">
        {kitsDatos.map((kit, index) => (
          <article
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <KitCard
              kit={kit}
              index={index}
              kitToggles={kitToggles}
              handleToggle={handleToggle}
            />
          </article>
        ))}
      </Stack>
    </section>
  );
};
