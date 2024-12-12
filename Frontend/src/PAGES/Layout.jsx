import { Link, Outlet } from "react-router-dom";
import Cabecera from "../COMPONENTS/Layout/Cabecera";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import logo_footer from "../IMAGES/WEBP/image.png";
import { ReactComponent as Logo } from "../IMAGES/SVG/LOGO.svg";
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
                  <h5>Productos</h5>
                </Link>
                <Link>Productos populares</Link>
                <Link>Productos</Link>
                <Link>Kits</Link>
              </Stack>
            </Col>

            {/* Sobre Nosotros */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={1}>
                <Link>
                  <h5>Sobre nosotros</h5>
                </Link>
                <Link>Pacis</Link>
                <Link>¿Por qué elegirnos?</Link>
                <Link>Propuesta de valor</Link>
                <Link>Sobre nuestros productos</Link>
                <Link>Reseñas</Link>
              </Stack>
            </Col>

            {/* Asistencia */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={1}>
                <Link>
                  <h5>Asistencia</h5>
                </Link>
                <a
                  href="https://wa.me/542616268274"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacto
                </a>{" "}
                <Link>Preguntas frecuentes</Link>
                <Link>Métodos de pago</Link>
                <Link>Devoluciones</Link>
                <Link>Cancelar pedido</Link>
                <Link>Términos y condiciones</Link>
              </Stack>
            </Col>

            {/* Seguinos */}
            <Col xs={12} sm={6} md={3} lg={2} className="mb-3 mb-lg-0">
              <Stack gap={1}>
                <Link>
                  <h5>Seguinos</h5>
                </Link>
                <Link>Redes sociales</Link>
              </Stack>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
