import { Link } from "react-router-dom";

function MainPage(): React.JSX.Element {
    return (
        <div className="container">
            <header className="header">
                <div className="header__logo">Goods4you</div>
                <nav className="header__nav">
                    <Link to="">Catalog</Link>
                    <Link to="">FAQ</Link>
                    <Link to="">
                        <span className="header__link-text">Cart</span>
                        <img src="" alt="cart icon" />
                    </Link>
                </nav>
            </header>
            <section className="hero">
                <div className="hero__wrapper">
                    <h1 className="hero__title">Any products from famous brands with worldwide delivery</h1>
                    <p className="hero__text">We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
                    <Link to="#">Go to shopping</Link>
                </div>
            </section>
            <section className="catalog">
                <h2 className="catalog__title">Catalog</h2>
                <div className="catalog__search-wrapper">
                    <input className="catalog__search-input" type="text" placeholder="Search by title" />
                    <button className="catalog__search-button catalog-btn">Search</button>
                </div>
                <div className="catalog__products-wrapper">
                    <div className="catalog__product">
                        <picture>
                            <source srcSet="image-small.jpg" media="(max-width: 768px)"></source>
                            <source srcSet="image-medium.jpg" media="(max-width: 1024px)"></source>
                            <source srcSet="image-large.jpg"></source>
                            <img src="image-default.jpg" alt="Image description"></img>
                        </picture>
                        <div className="catalog__product-info">
                            <p className="catalog__product-text">Essence Mascara Lash Princess</p>
                            <p className="catalog__product-price">110 $ </p>
                        </div>
                        <button className="catalog__product-button">
                            <img src="" alt="add to cart icon" />
                        </button>
                    </div>
                </div>
                <button className="catalog__show-more-button catalog-btn">Show more</button>
            </section>
            <section className="faq">
                <ul className="faq__list">
                    <li className="faq__item">
                        <p className="faq__item-title">Question 1</p>
                        <p className="faq__item-text">Long answer to the first question</p>
                        <div className="faq__item-button">
                            <img src="" alt="cross button" />
                        </div>
                    </li>
                </ul>
            </section>
            <footer className="footer">
                <div className="footer__logo">Goods4you</div>
                <div className="footer__nav">
                    <Link to="">Catalog</Link>
                    <Link to="">FAQ</Link>
                </div>
            </footer>
        </div>
    )
}

export default MainPage;
