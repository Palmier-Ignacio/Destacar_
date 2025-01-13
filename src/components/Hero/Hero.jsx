import React from 'react';
import './Hero.css';
function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <h1>Transformemos tu marca en la estrella de las redes sociales 🌟</h1>
        <img src=".\assets\img\profile_photo.png" alt="" className='img-hero-movile'/>
        <p>¡Hola! Soy Camila, especialista en social media y marketing digital. Mi propósito es ayudarte a posicionar tu marca de manera estratégica, logrando una presencia digital que sea auténtica, profesional y memorable.</p>
        <p>Diseño planes a medida para que tu negocio conecte con las personas correctas, aumente su alcance y convierta seguidores en clientes fieles. Desde contenido innovador hasta campañas impactantes, mi trabajo está orientado a que tu marca deje huella en el mundo digital.</p>
        <p>Si buscás destacar, conectar y crecer, estoy lista para acompañarte en ese camino.</p>
        <span>¡Empecemos hoy!</span>
        <a href=''>Potenciá tus redes conmigo</a>
      </div>
      <div className="hero-image">
        <img src=".\assets\img\profile_photo.png" alt="" />
      </div>
    </section>
  )
}

export default Hero;