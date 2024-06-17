
import { Element } from "react-scroll";
import Search from "../../components/search/search";
import "./main.scss";
import ProductCard from "../../components/product-card/product-card";
import Faq from "../../components/faq/faq";
import { products } from "../../mock";
import Hero from "../../components/hero/hero";
import { useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
import Header from "../../components/header/header";


function MainPage(): React.JSX.Element {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#catalog') {
            scroll.scrollTo(528);
        }
        if (hash === '#faq') {
            scroll.scrollTo(1567)
        }
    }, []);

    return (
        <div className="main__container">
            <Header />
            <Hero />
            <Element name="catalog">
                <section className="catalog">
                    <div className="container">
                        <h2 className="catalog__title">Catalog</h2>
                        <Search />
                        <div className="catalog__products-wrapper">
                            {products.map((product) => <ProductCard key={product.id} product={product} isInCart={product.id === 2} />)}
                        </div>

                        <button className="catalog__show-more-button catalog-btn">Show more</button>
                    </div>
                </section>
            </Element>
            <Element name="faq" >
                <Faq />
            </Element>
        </div>
    )
}

export default MainPage;
