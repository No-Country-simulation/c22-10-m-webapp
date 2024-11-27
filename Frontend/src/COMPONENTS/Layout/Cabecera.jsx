import { Navbar, Nav, Container, Col, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Buscador from "../Common/Buscador";
import {
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import "./Cabecera.css";

const Cabecera = () => {
  return (
    <header>
      {/* Primer Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Row className="w-100">
            <Col xs={6} sm={4} md={3}>
              <Navbar.Brand as={Link} to="/">
                <Image src="" rounded />
                Mi Logo
              </Navbar.Brand>
            </Col>
            <Col xs={12} sm={8} md={5}>
              <Buscador />
            </Col>
            <Col xs={12} sm={4} md={4}></Col>
          </Row>
        </Container>
      </Navbar>

      {/* Segundo Navbar con Dropdowns de Productos y Kits */}
      <Navbar bg="secondary" expand="md" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="navbar-main" />
          <Navbar.Collapse id="navbar-main">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/populares">
                Productos Populares
              </Nav.Link>

              {/* Dropdown para Productos */}
              <NavDropdown
                title="Productos"
                id="productos-dropdown"
                className="hover-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Bombas de sal
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Jabones artesanales
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Sales de baño
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Velas aromáticas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Aceites</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Exfoliantes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Mascarillas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cremas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Esponjas y pads
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Balsamos labiales
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Guayas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Reseñas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Crear reseñas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Armá tu kit
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="kits">
                Kits
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/auth">
                <UserIcon
                  style={{
                    color: "rgba(240, 248, 255, 0.616)",
                    height: "24px",
                    width: "24px",
                  }}
                />
                Ingresar
              </Nav.Link>
              <Nav.Link as={Link} to="/favoritos">
                <HeartIcon
                  style={{
                    color: "rgba(240, 248, 255, 0.616)",
                    height: "24px",
                    width: "24px",
                  }}
                />
                Favoritos
              </Nav.Link>
              <Nav.Link as={Link} to="/carrito">
                <ShoppingBagIcon
                  style={{
                    color: "rgba(240, 248, 255, 0.616)",
                    height: "24px",
                    width: "24px",
                  }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Cabecera;
