import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgCarusel1 from '../images/Carusel1.jpg'
import imgCarusel2 from '../images/Carusel2.jpg'
import imgCarusel3 from '../images/Carusel3.jpg'
import "../styles/Body.css"
import "../styles/Carousel.css"

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="img1"
          src={imgCarusel1}
          alt="Conjunto Solidea"
        />
        <Carousel.Caption>
          <h5>Conjunto Solidea</h5>
          <p>Confeccionado en sedita, con puntilla de tul bordado y detalle en mangas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img2"
          src={imgCarusel2}
          alt="Conjunto Encarnacion"
        />
        <Carousel.Caption>
          <h5>Conjunto Encarnacion</h5>
          <p>Confeccionado en sedita de alta calidad, con puntilla de tul bordado. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img3"
          src={imgCarusel3}
          alt="Conjunto Bernardita"
        />
        <Carousel.Caption>
          <h5>Conjunto Bernardita</h5>
          <p>
            Confeccionado en sedita de alta calidad, con detalles en tul bordado.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


const Body = () => {
  return (
    <div className="carousel-container">
      {DarkVariantExample()}
    </div>
  )
}

export default Body;