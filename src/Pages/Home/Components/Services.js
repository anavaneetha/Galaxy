import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../../../Assets/sliderImg1.jpg";
import img2 from "../../../Assets/sliderImg2.jpg";
import img3 from "../../../Assets/sliderImg3.jpg";
import img4 from "../../../Assets/sliderImg4.jpg";
import img5 from "../../../Assets/sliderImg5.jpg";
const Services = () => {
  const images = [img1, img2, img3, img4, img5];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,

    responsive: [
        {
          breakpoint: 1424,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <>
      <h1 className="heading">Services</h1>
      <section className="services">
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            {images.map((image) => {
              return (
                <div key={image}>
                  <img src={image} alt="" />
                </div>
              );
            })}
            
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Services;
