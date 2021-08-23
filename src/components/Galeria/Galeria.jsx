import React from "react";
import { Carousel } from "react-bootstrap";

function Galeria() {
  return (
    <>
      <section className='info-last'>
        <div className='contenedor'>
        <h2 class="titulo">Nuestro ambiente</h2>
          <Carousel variant='dark'>
            <Carousel.Item interval={800}>
              <img className='d-block w-100 block-foto' src='img/foto1.webp' alt='slide 1' />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className='d-block w-100 block-foto' src='img/foto2.webp' alt='slide 2' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100 block-foto' src='img/foto3.webp' alt='slide 3' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100 block-foto' src='img/foto4.webp' alt='slide 4' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100 block-foto' src='img/foto5.webp' alt='slide 6' />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Galeria;
