import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel' 
import pic from '../Components/bf.jpg'

class demoCarousel extends Component {
    render() {
        return (
<Carousel>
  <Carousel.Item>
    <img
    width={500} height={450}
      className="d-block w-100"
      src={pic}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      width={500} height={450}
      className="d-block w-100"
      src={pic}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
        width={500} height={450}
      className="d-block w-100"
      src={pic}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>

);
}
}

export default demoCarousel;
