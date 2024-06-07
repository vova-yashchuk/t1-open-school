// import { Link } from "react-router-dom";
// import Header from "../../components/header/header";
import { Element } from "react-scroll";
import Search from "../../components/search/search";
// import Hero from "../../components/hero/hero";
import "./main.scss";
import ProductCard from "../../components/product-card/product-card";
import Faq from "../../components/faq/faq";
import { products } from "../../mock";
import Hero from "../../components/hero/hero";

function MainPage(): React.JSX.Element {
    return (
        <div className="main__container">
            <Hero />
            <Element name="catalog">
                <section className="catalog container">
                    <h2 className="catalog__title">Catalog</h2>
                    <Search />
                    <div className="catalog__products-wrapper">
                        {products.map((product) => <ProductCard key={product.id} product={product} isInCart={product.id === 2}/>)}
                    </div>

                    <button className="catalog__show-more-button catalog-btn">Show more</button>
                </section>
            </Element>
            <Element name="faq">
                <Faq />
            </Element>
        </div>
    )
}

export default MainPage;
