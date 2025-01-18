import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Packs from "../../components/Packs/Packs";
import Servicios from "../../components/Servicios/Servicios";
import Footer from '../../components/Footer/Footer';

function SocialScreen() {
  return (
    <>
      <section id="servicios" className="services">
        <NavBar/>
        <Packs/>
        <Servicios/>
      </section>
      <Footer/>
    </>
  );
}

export default SocialScreen;
