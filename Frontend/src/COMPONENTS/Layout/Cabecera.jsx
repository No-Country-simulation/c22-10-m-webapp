import { Navbar, Nav, Container, Col, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../IMAGES/SVG/LOGO.svg";
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
      <Navbar>
        <Container>
          <Row className="w-100 d-flex align-items-center">
            <Col xs={6} sm={4} md={3} className="mb-2 mb-sm-0">
              <Navbar.Brand as={Link} to="/">
                <Logo
                  style={{ fill: "white", stroke: "white", height: "8vh" }}
                />
              </Navbar.Brand>
            </Col>
            <Col xs={12} sm={8} md={5} className="mt-2 mt-sm-0">
              <Buscador />
            </Col>
            <Col xs={12} sm={4} md={4}></Col>
          </Row>
        </Container>
      </Navbar>

      {/* Segundo Navbar con Dropdowns de Productos y Kits */}
      <Navbar expand="md">
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
