
import "./hero.scss";
import CatalogBtn from '../catalog-btn/catalog-btn';

function Hero(): React.JSX.Element {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <h1 className="hero__title">Any products from famous brands with worldwide delivery</h1>
                    <p className="hero__text">We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
                    <CatalogBtn buttonProps={'Go to shopping'} />
                    <span className="hero__transparent-text" aria-hidden="true">Goods4you</span>
                </div>
            </div>
        </section>
    )
}

export default Hero;
