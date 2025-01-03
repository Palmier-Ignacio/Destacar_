import { Link } from "react-router";
function NavBar() {
    return (
        <header className="navBar">
            <div className="logo">
                <Link to="/"></Link>
            </div>
            <nav>
                <ul>
                    <li>Servicios
                        <ul>
                            <li><Link to="/consegui-empleo">Conseguí Empleo</Link></li>
                            <li><Link to="/potencia-tus-redes">Potencia tus redes</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/#opiniones">Opiniones</Link></li>
                    <li><Link to="/#contacto">Contacto</Link></li>
                    <li><Link to="/#sobreMi">Sobre Mi</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBar; 