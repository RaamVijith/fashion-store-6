import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';
import slider1 from '../assets/images/slider-1.jpg'
import slider2 from '../assets/images/slider-4.jpg'
import slider3 from '../assets/images/slider-6.jpg'


const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      showArrows={true}
    >
      <div className="slide">
      <img src={slider1} alt="Slide 1" />
        <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
        </div>
      </div>
      <div className="slide">
      <img src={slider2} alt="Slide 2" />
        <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
        </div>
      </div>
      <div className="slide">
          <img src={slider3} alt="Slide 3" />
         <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
