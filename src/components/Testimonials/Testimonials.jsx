import React from 'react';
import Slider from "react-slick";
import './Testimonials.css';
import testimonialsData from '../../data/testimonials';
import Testimonial from '../Testimonial/Testimonial';


let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay:true,
    autoplaySpeed: 7000,
    cssEase:"ease-in-out",
    pauseOnHover: true,
    swipeToSlide: true,
  };
  
function Testimonials() {
    console.log(testimonialsData);
  return (
    <section className='testimonials' id='testimonios'>
      <div className='testimonials-content'>
        <h2>Testimonios</h2>
        <div className="line-title">
            <div className="line"></div>
          </div>
        <div className='testimonials-container'>
            <Slider {...settings} className='testimonials-slider'>
                {testimonialsData.map((testimonial, index) => (
                    <Testimonial key={index} text={testimonial.text} author={testimonial.author} logo={testimonial.img}/>
                ))}
            </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;    