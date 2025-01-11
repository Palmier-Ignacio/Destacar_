import React from 'react';
import "./Testimonial.css"
function Testimonial(props) {
  return (
    <article className="testimonial">
        <p>{props.text}</p>
        <div>
          <img src={`./assets/img/${props.logo}`} alt="" />
          <h3>{props.author}</h3>
        </div>
    </article>
  );
}
export default Testimonial;