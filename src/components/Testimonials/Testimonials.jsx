import React from 'react';
import Slider from "react-slick";
import './Testimonials.css';
import testimonialsData from '../../data/testimonials';
import Testimonial from '../Testimonial/Testimonial';


let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
function Testimonials() {
    console.log(testimonialsData);
  return (
    <section className='testimonials' id='testimonios'>
        <h2>Testimonios</h2>
        <div className='testimonials-container'>
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                    <Testimonial key={index} text={testimonial.text} author={testimonial.author} logo={testimonial.img}/>
                ))}
            </Slider>
        </div>
    </section>
  );
}

export default Testimonials;    