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
                <Navbar.Brand as={Link} to="">
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
              <Col md="auto">
                <Nav.Link as={Link} to="/enlace">
                  Carrito de compras
                </Nav.Link>
              </Col>
            </Row>{" "}
            <Row>
              <Col>
                <Nav.Link as={Link} to="/enlaceuno">
                  enlace uno
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/enlacedos">
                  enlace dos
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="">
                  Home
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="">
                  Home
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="">
                  Home
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="">
                  Home
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Cabecera;
