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
        <img className='d-block w-100 img-fluid' style={{height:"450px",width:"1298px"}} src="/file.png" alt="first" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100 img-fluid' style={{height:"450px",width:"1298px"}} src="/file(1).png" alt="sec" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100 img-fluid' style={{height:"450px",width:"1298px"}} src="/gg.jpg" alt="third" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
