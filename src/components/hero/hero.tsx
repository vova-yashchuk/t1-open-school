// import { Link as AnchorLink } from 'react-scroll';
import "./hero.scss";
import CatalogBtn from '../catalog-btn/catalog-btn';

function Hero(): React.JSX.Element {
    return (
        <section className="hero container">
                <div className="hero__wrapper">
                    <h1 className="hero__title">Any products from famous brands with worldwide delivery</h1>
                    <p className="hero__text">We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
                    {/* <AnchorLink className="hero__button catalog-btn" to="catalog">Go to shopping</AnchorLink> */}
                    <CatalogBtn buttonProps={'Go to shopping'} />
                    <span className="hero__transparent-text">Goods4you</span>
                </div>
            </section>
    )
}

export default Hero;
