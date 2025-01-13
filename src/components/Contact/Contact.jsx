import React from 'react';
import "./Contact.css";
function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className='contact-content'>
      <h2>¡Contactate conmigo!</h2>
        <div className="line-title">
            <div className="line"></div>
          </div>
        <div className='contact-card'>
          <p>Facebook: <a href="https://www.facebook.com/profile.php?id=61565981474251" target='blanc_'>Destacar digital</a></p>
        </div>
        <div className='contact-card'>
          <p>Instagram: <a href="https://www.instagram.com/destacar.digital/" target='blanc_'>@destacar.digital</a></p>
        </div>
        <div className='contact-card'>
          <p>Mail: <a href="mailto:digitaldestacar@gmail.com" target='blanc_'>digitaldestacar@gmail.com</a></p>
        </div>
        <div className='contact-card'>
          <p>Whatsapp: <a href="https://wa.me/+5491144772069?text=Hola%20Destacar%20digital!%20Quisiera..." target='blanc_'>+54 9 11 4477-2069</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;