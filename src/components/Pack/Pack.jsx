import React from "react";
import "./Pack.css"

function Pack(props){
    return(
        <article className="pack">
            <div className="pack-name">
                <h3>{props.title}</h3>
            </div>
            <div className="pack-info">
                <ul className="pack-items">
                    <li><h4>Incluye:</h4></li>
                    {props.items.map((item,idx) => 
                        <li key={item.name+idx}>
                            <p><b>{item.name}:</b> {item.text}</p>
                        </li>
                    )}
                </ul>
                <div className="pack-price">
                    <p>{props.price} <span>/mes</span></p>
                    <a href={`https://wa.me/+5491144772069?text=Hola%20Destacar%20digital!%20Me%20gustaria%20adquirir%20el%20${props.title}`} target="blanc_">¡Lo quiero!</a>
                </div>
            </div>
        </article>
    )
}

export default Pack;