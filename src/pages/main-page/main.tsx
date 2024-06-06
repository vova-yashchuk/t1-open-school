// import { Link } from "react-router-dom";
// import Header from "../../components/header/header";
import { Element } from "react-scroll";
import Search from "../../components/search/search";
// import Hero from "../../components/hero/hero";
import "./main.scss";
import ProductCard from "../../components/product-card/product-card";
import Faq from "../../components/faq/faq";

function MainPage(): React.JSX.Element {
    return (
        <div className="main__container">
            {/* <Header />
            <Hero /> */}
            {/* <section className="hero">
                <div className="hero__wrapper">
                    <h1 className="hero__title">Any products from famous brands with worldwide delivery</h1>
                    <p className="hero__text">We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
                    <Link to="#">Go to shopping</Link>
                </div>
            </section> */}
            <Element name="catalog">
                <section className="catalog container">
                    <h2 className="catalog__title">Catalog</h2>
                    <Search />
                    <div className="catalog__products-wrapper">
                        <ProductCard productCartProps={null} />
                        <ProductCard productCartProps={'inCart'} />
                        <ProductCard productCartProps={null} />
                        <ProductCard productCartProps={null} />
                        <ProductCard productCartProps={null} />
                        <ProductCard productCartProps={'inCart'} />
                    </div>

                    <button className="catalog__show-more-button catalog-btn">Show more</button>
                </section>
            </Element>
            <Element name="faq">
                <Faq />
                {/* <section className="faq container">
                    <div className="faq__wrapper">
                        <h2 className="faq__title">FAQ</h2>
                        <ul className="faq__list">
                            <li className="faq__item">
                                <p className="faq__item-title">Question 1</p>
                                <p className="faq__item-text">Long answer to the first question</p>
                                <div className="faq__item-button">
                                    <img src="/img/plus.svg" alt="cross button" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </section> */}
            </Element>
            {/* <footer className="footer">
                <div className="footer__logo">Goods4you</div>
                <div className="footer__nav">
                    <Link to="">Catalog</Link>
                    <Link to="">FAQ</Link>
                </div>
            </footer> */}
        </div>
    )
}

export default MainPage;
