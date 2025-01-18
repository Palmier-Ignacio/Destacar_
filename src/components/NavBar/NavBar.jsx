import { Link } from "react-router";
import React, {useState} from "react";
import "./NavBar.css"
function NavBar() {
    const [navMovileIsActive, setNavMovileIsActive] = useState(false);
    return (
        <header className="navBar">
            <div className="logo-container">
                <Link to="/" className="logo"><img src="../../../public/assets/img/Logo_Web.png" alt="" /></Link>
            </div>
            <nav className="nav-web">
                <ul>
                    <li><Link to="/potencia-tus-redes/#servicios">Potencia tus redes</Link></li>
                    <li><div className="linea"></div></li>
                    <li><Link to="/#testimonios">Testimonios</Link></li>
                    <li><div className="linea"></div></li>
                    <li><Link to="/#sobreMi">Sobre mi</Link></li>
                    <li><div className="linea"></div></li>
                    <li><Link to="/#contacto">Contacto</Link></li>
                </ul>
            </nav>
            <button className="nav-movile-button" onClick={() => {setNavMovileIsActive(!navMovileIsActive)}}>
                <div className="nav-movile-button-line"></div>
                <div className="nav-movile-button-line"></div>
                <div className="nav-movile-button-line"></div>
            </button>
            <nav className={`nav-movile ${navMovileIsActive ? " show" : " hidden"}`}>
                <ul>
                    <li><div className="linea-movile"></div></li>
                    <li><Link to="/potencia-tus-redes/#servicios">Potencia tus redes</Link></li>
                    <li><div className="linea-movile"></div></li>
                    <li><Link to="/#testimonios">Testimonios</Link></li>
                    <li><div className="linea-movile"></div></li>
                    <li><Link to="/#sobreMi">Sobre mi</Link></li>
                    <li><div className="linea-movile"></div></li>
                    <li><Link to="/#contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBar; 