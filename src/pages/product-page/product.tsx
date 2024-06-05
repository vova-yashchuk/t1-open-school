import { Link } from "react-router-dom";

function ProductPage(): React.JSX.Element {
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
            <section className="product">
                <h2 className="product__title">Product 5</h2>
                <div className="product__wrapper">
                    <div className="product__images">
                        <div className="product__big-img">
                            <picture>
                                <source srcSet="image-small.jpg" media="(max-width: 768px)"></source>
                                <source srcSet="image-medium.jpg" media="(max-width: 1024px)"></source>
                                <source srcSet="image-large.jpg"></source>
                                <img src="image-default.jpg" alt="Image description"></img>
                            </picture>
                        </div>
                        <div className="product__small-img-wrapper">
                            <div className="product__small-img">
                                <picture>
                                    <source srcSet="image-small.jpg" media="(max-width: 768px)"></source>
                                    <source srcSet="image-medium.jpg" media="(max-width: 1024px)"></source>
                                    <source srcSet="image-large.jpg"></source>
                                    <img src="image-default.jpg" alt="Image description"></img>
                                </picture>
                            </div>
                            <div className="product__small-img">
                                <picture>
                                    <source srcSet="image-small.jpg" media="(max-width: 768px)"></source>
                                    <source srcSet="image-medium.jpg" media="(max-width: 1024px)"></source>
                                    <source srcSet="image-large.jpg"></source>
                                    <img src="image-default.jpg" alt="Image description"></img>
                                </picture>
                            </div>
                            <div className="product__small-img">
                                <picture>
                                    <source srcSet="image-small.jpg" media="(max-width: 768px)"></source>
                                    <source srcSet="image-medium.jpg" media="(max-width: 1024px)"></source>
                                    <source srcSet="image-large.jpg"></source>
                                    <img src="image-default.jpg" alt="Image description"></img>
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className="product__info">
                        <div className="product__info-top">
                            <h3 className="product__info-title">Puma Force 1 Shadow</h3>
                            <div className="product__info-id">
                                <span className="product__info-id">SKU ID</span>
                                <span className="product__info-id bold">0005</span>
                            </div>
                        </div>
                        <ul className="product__characters">
                            <li className="product__characters-item">
                                <span className="product__characters-text">Rating</span>
                                <div className="product__characters-rating">
                                    <img src="" alt="rating stars" />
                                </div>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Base price</span>
                                <span className="product__characters-data">500$</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Discount percentage</span>
                                <span className="product__characters-data">10%</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Discount price</span>
                                <span className="product__characters-data">450$</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Stock</span>
                                <span className="product__characters-data">13</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Brand</span>
                                <span className="product__characters-data">Puma</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Category</span>
                                <span className="product__characters-data">Smartphones</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Description</span>
                                <span className="product__characters-data">An apple mobile which is nothing like apple</span>
                            </li>
                        </ul>
                        <button className="product__add catalog-btn"></button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ProductPage;
