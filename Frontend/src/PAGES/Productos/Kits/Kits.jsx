import { useState, useEffect } from "react";
import { Stack, Card, Container, Row, Col } from "react-bootstrap";

const ToggleButton = ({ isActive, isDay, onClick, children }) => (
  <button
    style={{
      width: "30%",
      fontFamily: '"Montserrat", serif',
      fontOpticalSizing: "auto",
      fontWeight: 600,
      fontStyle: "normal",
      minWidth: "max-content",
      height: "max-content",
      backgroundColor: "transparent",
      border: "none",
      borderBottom: isActive
        ? `1px solid ${isDay ? "black" : "white"}`
        : "none",
      color: isActive ? (isDay ? "black" : "white") : isDay ? "black" : "white",
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
        margin: "15px", // Añadimos margen entre las tarjetas
      }}
      className="w-75 mx-auto" // Centro de las tarjetas
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
        {kit.nombre_dia}
      </h5>
      <Card.Img
        variant="top"
        src={isDay ? kit.img_dia : kit.img_noche}
        style={{
          width: "40%",
          minWidth: "40%",
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
              isDay={isDay}
              onClick={() => handleToggle(index, 0)}
            >
              Día
            </ToggleButton>
            <ToggleButton
              isActive={!isDay}
              isDay={isDay}
              onClick={() => handleToggle(index, 1)}
            >
              Noche
            </ToggleButton>
          </Row>
          <Row className="h-75">
            <Row className="h-25">
              <h5 style={kit700style}>Descripción:</h5>
              <p style={kit400style}>
                {isDay ? kit.descripcion_dia : kit.descripcion_noche}
              </p>
            </Row>
            <Row className="h-25">
              <h5 style={kit700style}>Incluye:</h5>
              <p style={kit400style}>
                {isDay ? kit.kit_dia.join(", ") : kit.kit_noche.join(", ")}
              </p>
            </Row>
            <Row className="h-25 w-100 d-flex align-items-center">
              <Col xs="auto">
                <h5 style={kit700style}>Beneficios:</h5>
                <p style={kit400style}>
                  {isDay
                    ? kit.beneficios_dia.join(", ")
                    : kit.beneficios_noche.join(", ")}
                </p>
              </Col>
              <Col xs="auto" className="h-50 ms-auto d-flex flex-column">
                <span className="mt-auto" style={kit500style}>
                  Precio: ${isDay ? kit.precio_dia : kit.precio_noche}
                </span>
              </Col>
            </Row>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};
const kit700style = {
  fontFamily: '"Montserrat", serif',
  fontOpticalSizing: "auto",
  fontWeight: 700,
  fontStyle: "normal",
};

const kit500style = {
  fontFamily: '"Montserrat", serif',
  fontOpticalSizing: "auto",
  fontWeight: 500,
  fontStyle: "normal",
};
const kit400style = {
  fontFamily: '"Montserrat", serif',
  fontOpticalSizing: "auto",
  fontWeight: 400,
  fontStyle: "normal",
};
export const Kits = () => {
  const [kitsDatos, setKitsDatos] = useState([]);
  const [kitToggles, setKitToggles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/kits/")
      .then((response) => response.json())
      .then((data) => {
        setKitsDatos(data);
        setKitToggles(new Array(data.length).fill(0)); // Por defecto, todos los kits se mostrarán en "Día"
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  const handleToggle = (index, value) => {
    const updatedToggles = [...kitToggles];
    updatedToggles[index] = value;
    setKitToggles(updatedToggles);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {" "}
        {/* Alinea las tarjetas al centro */}
        <Col xs="auto">
          <Stack gap={5}>
            {kitsDatos.slice(0, 4).map(
              (
                kit,
                index // Solo toma los primeros 4 kits
              ) => (
                <KitCard
                  key={kit.id}
                  kit={kit}
                  index={index}
                  kitToggles={kitToggles}
                  handleToggle={handleToggle}
                />
              )
            )}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};
