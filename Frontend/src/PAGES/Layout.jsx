import { Link, Outlet } from "react-router-dom";
import Cabecera from "../COMPONENTS/Layout/Cabecera";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { ReactComponent as Logo } from "../IMAGES/SVG/LOGO.svg";

const footerLinkStyle = {
  fontFamily: '"Montserrat", serif',
  fontOpticalSizing: "auto",
  fontWeight: 400,
  fontStyle: "normal",
};
const footerh5Style = {
  fontFamily: '"Montserrat", serif',
  fontOpticalSizing: "auto",
  fontWeight: 700,
  fontStyle: "normal",
};

export const Layout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "rgb(200, 196, 196)",
      }}
    >
      <Cabecera />
      <main>
        <Outlet />
      </main>
      <footer
        style={{
          backgroundColor: "rgb(130, 119, 120)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container fluid className="p-5">
          <Row className="text-center text-lg-start">
            {/* Logo (más ancho) */}
            <Col
              xs={12}
              md={3}
              lg={3}
              className="mb-3 mb-lg-0 d-flex justify-content-center align-items-center"
            >
              <Logo style={{ fill: "white", stroke: "white", height: "8vh" }} />
            </Col>

            {/* Productos */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={2}>
                <Link>
                  <h5 style={footerh5Style}>Productos</h5>
                </Link>
                <Link style={footerLinkStyle}>Productos populares</Link>
                <Link style={footerLinkStyle}>Productos</Link>
                <Link style={footerLinkStyle}>Kits</Link>
              </Stack>
            </Col>

            {/* Sobre Nosotros */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={1}>
                <Link>
                  <h5 style={footerh5Style}>Sobre nosotros</h5>
                </Link>
                <Link style={footerLinkStyle}>Pacis</Link>
                <Link style={footerLinkStyle}>¿Por qué elegirnos?</Link>
                <Link style={footerLinkStyle}>Propuesta de valor</Link>
                <Link style={footerLinkStyle}>Sobre nuestros productos</Link>
                <Link style={footerLinkStyle}>Reseñas</Link>
              </Stack>
            </Col>

            {/* Asistencia */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={1}>
                <Link>
                  <h5 style={footerh5Style}>Asistencia</h5>
                </Link>
                <a
                  href="https://wa.me/542616268274"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={footerLinkStyle}
                >
                  Contacto
                </a>
                <Link style={footerLinkStyle}>Preguntas frecuentes</Link>
                <Link style={footerLinkStyle}>Métodos de pago</Link>
                <Link style={footerLinkStyle}>Devoluciones</Link>
                <Link style={footerLinkStyle}>Cancelar pedido</Link>
                <Link style={footerLinkStyle}>Términos y condiciones</Link>
              </Stack>
            </Col>

            {/* Seguinos */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={1}>
                <Link>
                  <h5 style={footerh5Style}>Seguinos</h5>
                </Link>
                <Link style={footerLinkStyle}>Redes sociales</Link>
              </Stack>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
