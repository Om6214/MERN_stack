import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Ensure this import is correct
import "../App.css"


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <a href="/service"><img className='d-block w-100 carousel-image'  src="/coro1.jpeg" alt="first" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="/service"><img className='d-block w-100  carousel-image'  src="/head.jpeg" alt="third" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href="/service"><img className='d-block w-100  carousel-image'  src="/ear.jpg" alt="third" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href='/service'><img className='d-block w-100 carousel-image'  src="/elec.png" alt="sec" /></a>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
