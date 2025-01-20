import "./About.css";
function About() {
  return (
    <section className="about" id="sobreMi">
        <h2>Sobre mi</h2>
          <div className="line-title">
            <div className="line"></div>
          </div>
        <div className="about-container">
          <div className="about-image">
            <img src=".\assets\img\Logo_Movile.png" alt="" className="logo-movile"/>
            <img src=".\assets\img\Logo_Web.png" alt="" className="logo-web"/>
          </div>
          <div className="about-info">
              <p><b>Destacar digital</b> surgió desde mi pasión por el mundo del marketing digital y el poder de las <b>redes sociales</b> para <b>conectar personas</b> y <b>transformar negocios.</b> Con más de 3 años de experiencia como community manager, descubrí que cada marca tiene una historia única que merece ser contada.</p>
              <p>Mi <i><b>misión</b></i> es <b>ayudarte</b> a encontrar esa esencia y convertirla en una presencia digital auténtica y profesional. Desde <b>estrategias personalizadas</b> hasta contenido que conecte de verdad, trabajo para que tu negocio se destaque y logres los resultados que buscás.</p>
              <p>Y lo más importante….</p>
              <h3>NO ESTÁS SOLO</h3>
              <p>Estoy acá para acompañarte en cada paso, asegurándome de que te sientas respaldado mientras hacemos que <b>tu marca brille en el mundo digital.</b></p>
              <p>¿Te animás a dar el siguiente paso? <b>¡Vamos a lograrlo juntos!</b></p>
          </div>
        </div>
    </section>
  );
}

export default About;