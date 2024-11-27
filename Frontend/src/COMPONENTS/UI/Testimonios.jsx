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
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
