import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Cabecera() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Row>
              <Col>
                <Navbar.Brand as={Link} to="/">
                  Pacis
                </Navbar.Brand>
              </Col>
              <Col>
                <Form inline>
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Buscar"
                        className=" mr-sm-2"
                      />
                    </Col>
                    <Col xs="auto">
                      <Button type="submit">Submit</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col md="auto">
                <Nav.Link as={Link} to="">
                  Ingresar
                </Nav.Link>
              </Col>
            </Row>{" "}
            <Row>
              <Col className="text-center">
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Bombas de sal
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Jabones artesanales
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Sales de baño
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Velas aromáticas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Aceites
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Item href="#action/3.4">
                    Exfoliantes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Mascarillas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Cremas</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Esponjas y pads
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Bálsamos labiales
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Guayas</NavDropdown.Item>
                </NavDropdown>
              </Col>
              <Col className="text-center">
                <NavDropdown title="Kits de baño" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <strong>Kit 1</strong>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Día</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Noche</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    <strong>Kit 2</strong>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Día</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Noche</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    <strong>Kit 3</strong>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Día</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Noche</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    <strong>Kit 4</strong>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Día</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Noche</NavDropdown.Item>
                </NavDropdown>
              </Col>
              <Col className="text-center">
                <Nav.Link as={Link} to="/enlacedos">
                  Productos populares
                </Nav.Link>
              </Col>
              <Col className="text-center" md="auto">
                Carrito
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Cabecera;
