import React from "react";
import Slider from "react-slick";
import "./Testimonios.css";
import foto from "../../IMAGES/WEBP/fotocl.webp";
function Testimonios() {
  // consumir endpoint de testimonios
  const arrayTestimonios = [
    {
      img: foto,
      usuario: "user3765",
      valoracion: "estrellitas",
      comentario: "comentarios",
    },
    {
      img: foto,
      usuario: "user3765",
      valoracion: "estrellitas",
      comentario: "comentarios",
    },
    {
      img: foto,
      usuario: "user3765",
      valoracion: "estrellitas",
      comentario: "comentarios",
    },
    {
      img: foto,
      usuario: "user3765",
      valoracion: "estrellitas",
      comentario: "comentarios",
    },
    {
      img: foto,
      usuario: "user3765",
      valoracion: "estrellitas",
      comentario: "comentarios",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {arrayTestimonios.map((testimonio, index) => (
          <div key={index} className="testimonio">
            <img src={testimonio.img} alt="Cliente Feliz" />
            <p>{testimonio.comentario}</p>
            <div>{testimonio.valoracion}</div>
            <h6>{testimonio.usuario}</h6>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonios;
