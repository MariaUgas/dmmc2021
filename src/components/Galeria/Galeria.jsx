import React from "react";
import { Carousel } from "react-bootstrap";
import foto1 from "../../img/foto1.webp";
import foto2 from "../../img/foto2.webp";
import foto3 from "../../img/foto3.webp";
import foto4 from "../../img/foto4.webp";

function Galeria() {
  return (
   
      <div className="carrusel-galeria">
      
        <Carousel variant="dark" style={{width:"700px"}}>
          <Carousel.Item >
            <img
              className="d-block w-100 block-foto"
              src={foto1}
              alt="slide 1"
            />
          </Carousel.Item>
          <Carousel.Item /*interval={800}*/>
            <img
              className="d-block w-100 block-foto"
              src={foto2}
              alt="slide 2"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100 block-foto"
              src={foto3}
              alt="slide 3"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100 block-foto"
              src={foto4}
              alt="slide 4"
            />
          </Carousel.Item>
        </Carousel>
      </div>
   
  );
}

export default Galeria;
