import Slider from "react-slick";
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
  };
  return (
    <Slider {...settings} className="slider-banner">
      <div className="item-banner">
        <img src={foto} />
      </div>
      <div className="item-banner">
        <img src={foto} />
      </div>
      <div className="item-banner">
        <img src={foto} />
      </div>
      <div className="item-banner">
        <img src={foto} />
      </div>
    </Slider>
  );
};
