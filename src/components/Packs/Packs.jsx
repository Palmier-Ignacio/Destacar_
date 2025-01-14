import React from "react";
import "./Packs.css"
import packsData from "../../data/packsData.json"
import Pack from "../Pack/Pack";

function Packs(){
    return(
        <section className="packs">
            {packsData.map((pack,idx) => <Pack key={pack.title + idx} title={pack.title} items={pack.items} price={pack.price} /> )}
        </section>
    );
}
export default Packs;