import { Link } from "react-router";
import bannerPromos from '../../data/bannerPromos.json';
import BannerPromo from "../BannerPromo/BannerPromo";

function UpperHomeSection() {
  return (
    <section className="upper-home-section">
        <h1>Destacar Digital</h1>
        <section className="home-services">
            <article className="home-service-button">
                <Link to="/consegui-empleo">
                    <h3>Conseguí Empleo</h3>
                </Link>
            </article>
            <article className="home-service-button">
                <Link to="/potencia-tus-redes">
                    <h3>Potencia tus redes</h3>
                </Link>
            </article>
        </section>
        <section className="banner">
            <div className="banner-container">
                <div className="left-arrow">
                    {'<'}
                </div>
                <ul>
                    {bannerPromos.map((bannerPromo, index) => {
                        return (
                            <li key={index}>
                                <BannerPromo text={bannerPromo.text}/>  
                            </li>
                        );
                    })}
                </ul>
                <div className="right-arrow">
                    {'>'}
                </div>
            </div>
        </section>
    </section>
  );
}
export default UpperHomeSection;