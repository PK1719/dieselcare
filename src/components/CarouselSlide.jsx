import image1 from "../images/carousel1.jpg";
import image2 from "../images/carousel2.jpg";
import image3 from "../images/carousel3.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselSlide() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      transitionDuration={500}
      autoPlay={true}
      className="carousel-container"
    >
      <div>
        <img src={image1} />
      </div>
      <div>
        <img src={image2} />
      </div>
      <div>
        <img src={image3} />
      </div>
    </Carousel>
  );
}

export default CarouselSlide;
