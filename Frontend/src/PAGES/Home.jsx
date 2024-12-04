import { Banner } from "../COMPONENTS/UI/Banner";
import Testimonios from "../COMPONENTS/UI/Testimonios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home" style={{ overflow: "hidden" }}>
      <div
        style={{
          height: "82vh",
          width: "100vw",
        }}
      >
        <Container
          className="w-100 h-100 m-0 p-0 "
          style={{ position: "relative" }}
        >
          <Banner />
        </Container>
      </div>
      <div style={{ height: "auto", width: "100vw" }}>
        <Testimonios />
      </div>{" "}
    </section>
  );
};
