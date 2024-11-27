import { Banner } from "../COMPONENTS/UI/Banner";
import Testimonios from "../COMPONENTS/UI/Testimonios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home" style={{ overflow: "hidden" }}>
      <div style={{ height: "70vh", width: "100vw", margin: "8vh auto" }}>
        <Container
          className="w-100 h-100 "
          style={{ position: "relative", border: " solid black 1px" }}
        >
          <Banner />
          <Link className="link-vermas" to="/">
            Ver más
          </Link>
        </Container>
      </div>
      <div style={{ height: "auto", width: "100vw" }}>
        <Testimonios />
      </div>{" "}
    </section>
  );
};
