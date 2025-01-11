import { Link } from "react-router";
import "./NavBar.css"
function NavBar() {
    return (
        <header className="navBar">
            <div className="logo-container">
                <Link to="/" className="logo"></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/potencia-tus-redes">Potencia tus redes</Link></li>
                    <li><div className="linea"></div></li>
                    <li><Link to="/#testimonios">Testimonios</Link></li>
                    <li><div className="linea"></div></li>
                    <li><Link to="/#sobreMi">Sobre mi</Link></li>
                    <li><div className="linea"></div></li>
                    <li><Link to="/#contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBar; 