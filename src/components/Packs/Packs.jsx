import React from "react";
import "./Packs.css"
import packsData from "../../data/packsData.json"
import Pack from "../Pack/Pack";

function Packs(){
    return(
        <section className="packs">
            <h1 className="title-services">Packs</h1>
            <span className="packs-subtitle">Manejo de redes</span>
            <div className="line-title">
                <div className="line"></div>
            </div>
            {packsData.map((pack,idx) => <Pack key={pack.title + idx} title={pack.title} items={pack.items} price={pack.price} /> )}
        </section>
    );
}
export default Packs;