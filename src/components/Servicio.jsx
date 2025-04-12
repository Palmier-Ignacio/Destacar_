import "./Servicio.css"
import { useState } from "react";
function Servicio(props) {
    const [isActive, setActive] = useState(false)
    const toggleHeight = () => {
        setActive(!isActive)
    }
    return (
        <article className="service">
            <div className="service-name">
                <h3>{props.title}</h3>
            </div>
            <div className="service-info">
                <div className="service-description">
                    <p>{props.description}</p>
                </div>
                <div className={`items ${isActive ? "show" : "hide"}`}>
                    <h4>¿Qué incluye? </h4>
                    <ul>
                        {props.items.map((item, idx) => <li key={idx+"-incluye-item"}><p><b>{item.name} {item.text ? ":" : ""}</b> {item.text}</p></li>)}
                    </ul>
                </div>
                <div className={`benefits ${isActive ? "show" : "hide"}`}>
                    <p>{props.benefits.name}:</p>
                    <ul>
                        {props.benefits.items.map((item, idx) => <li key={idx+"-beneficio-item"}>{item}</li>)}
                    </ul>
                </div>
                <button className="button-hide-items" onClick={() => toggleHeight()}>{isActive ? "ocultar" : "ver más"}</button>
                <div className="service-bottom-items">
                    {props.bottom_items.map((item, idx) => <p key={idx+"-bottom-item"}>{item}</p>)}
                </div>
                <div className="service-price">
                    <p>{props.price}</p>
                    <a href={`https://wa.me/+5491144772069?text=Hola%20Destacar%20digital!%20Me%20gustaria%20adquirir%20el%20servicio%20${props.title}`} target="blanc_">{props.textButton}</a>
                </div>
            </div>
        </article>
    )
}

export default Servicio