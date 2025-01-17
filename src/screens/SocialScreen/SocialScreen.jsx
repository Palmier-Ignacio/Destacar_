import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Packs from "../../components/Packs/Packs";


function SocialScreen() {
  return (
    <section id="servicios">
      <NavBar/>
      <h1 className="title-services">Servicios</h1>
      <Packs/>
    </section>
  );
}

export default SocialScreen;
