import React from "react";

function Pack(props){
    return(
        <article className="pack">
            <div className="pack-name">
                <h3>{props.title}</h3>
            </div>
            <div className="pack-info">
                <ul className="pack-items">
                    {props.items.map((item,idx) => 
                        <li key={item.name+idx}>
                            <p><b>{item.name}:</b> {item.text}</p>
                        </li>
                    )}
                </ul>
                <div className="pack-price">
                    <p>{props.price} <span>/mes</span></p>
                    <a href="">¡Lo quiero!</a>
                </div>
            </div>
        </article>
    )
}

export default Pack;