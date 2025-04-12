import React from "react"
import "./Servicios.css"
import servicesData from "../../data/servicesData.json"
import Servicio from "../Servicio"
function Servicios(){
    return(
        <section className="servicios">
            <h2>Servicios</h2>
            <div className="line-title">
                <div className="line"></div>
            </div>
            {servicesData.map((service, idx) => <Servicio key={"service-"+idx} title={service.title} price={service.price} description={service.description} items={service.items} benefits={service.benefits} bottom_items={service.bottom_items} textButton={service.textButton}/>)}
        </section>
    )
}

export default Servicios