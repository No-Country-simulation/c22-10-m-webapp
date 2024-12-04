import Slider from "react-slick";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import foto from "../../IMAGES/WEBP/fotocl.webp";
import "./Banner.css";

export const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "50px", // Ajusta la altura desde abajo
          zIndex: 1,
        }}
      >
        <ul style={{ margin: "0" }}>{dots}</ul>
      </div>
    ),
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`} // Mantén la clase predeterminada
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: "5vw",
          zIndex: 1,
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
        onClick={onClick}
      >
        {/* Flecha predeterminada */}
        <ArrowRightIcon
          style={{
            color: "#ffffff",
            position: "absolute",
            left: "0",
            backgroundColor: "rgb(66, 55, 53)",
            padding: "8px",
          }}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`} // Mantén la clase predeterminada
        style={{
          ...style,
          display: "block",
          position: "absolute",
          left: "5vw",
          zIndex: 1,
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
        onClick={onClick}
      >
        {/* Flecha predeterminada */}
        <ArrowLeftIcon
          style={{
            color: "#ffffff",
            position: "absolute",
            left: "0",
            backgroundColor: "rgb(66, 55, 53)",
            padding: "8px",
          }}
        />
      </div>
    );
  }

  return (
    <Slider {...settings} className="slider-banner">
      <figure className="item-banner">
        <img src={foto} alt="Banner" />
        <figcaption>Texto descriptivo</figcaption>
      </figure>
      <figure className="item-banner">
        <img src={foto} alt="Banner" />
        <figcaption>Texto descriptivo</figcaption>
      </figure>
      <figure className="item-banner">
        <img src={foto} alt="Banner" />
        <figcaption>Texto descriptivo</figcaption>
      </figure>
      <figure className="item-banner">
        <img src={foto} alt="Banner" />
      </figure>
      <figure className="item-banner">
        <img src={foto} alt="Banner" />
        <figcaption>Texto descriptivo</figcaption>
      </figure>
    </Slider>
  );
};
