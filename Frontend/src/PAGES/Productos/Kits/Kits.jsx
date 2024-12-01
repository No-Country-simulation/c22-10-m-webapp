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
        backgroundColor: isDay ? "rgb(207, 196, 197)" : "rgb(77, 70, 71)",
        color: isDay ? "rgb(15, 14, 14)" : "rgb(254, 250, 249)",
      }}
      className="w-75"
    >
      <Card.Img
        variant="top"
        src={isDay ? kit.dia.img : kit.noche.img}
        style={{ width: "50%", height: "100%", objectFit: "cover" }}
      />
      <Card.Body>
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
          <hr />
          <Row className="h-25">
            <Col className="d-flex flex-column justify-content-evenly">
              <Row>
                <li>{isDay ? kit.dia.kit.p1 : kit.noche.kit.p1}</li>
              </Row>
              <Row>
                <li>{isDay ? kit.dia.kit.p2 : kit.noche.kit.p2}</li>
              </Row>
            </Col>
            <Col className="d-flex flex-column justify-content-evenly">
              <Row>
                <li>{isDay ? kit.dia.kit.p3 : kit.noche.kit.p3}</li>
              </Row>
              <Row>
                <li>{isDay ? kit.dia.kit.p4 : kit.noche.kit.p4}</li>
              </Row>
            </Col>
          </Row>
          <Row className="h-50 overflow-hidden">
            <Card.Text
              className="text-wrap text-break"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
              }}
            >
              {isDay ? kit.dia.parrafo : kit.noche.parrafo}
            </Card.Text>
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
          <h2>{kit.nombre}</h2>
          <KitCard
            kit={kit}
            index={index}
            kitToggles={kitToggles}
            handleToggle={handleToggle}
          />
        </article>
      ))}
    </Stack>
  );
};
