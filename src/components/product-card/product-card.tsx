import CartButtons from "../cart-buttons/cart-buttons";
import "./product-card.scss";

type ProductCard = {
    productCartProps: 'inCart' | null;
}

function ProductCard({productCartProps}: ProductCard): React.JSX.Element {
    return (
        <div className="catalog__product">
            <div className="catalog__product-img-wrapper">
                <div className="catalog_product-img-effect"></div>
                <picture>
                    <source srcSet="https://picsum.photos/200/160" media="(max-width: 768px)"></source>
                    <source srcSet="https://picsum.photos/300/250" media="(max-width: 1024px)"></source>
                    <source srcSet="/img/product.png"></source>
                    <img className="catalog__product-img" src="/img/product.png" alt="Image description"></img>
                </picture>
            </div>
            <div className="catalog__product-wrapper">
                <div className="catalog__product-info">
                    <p className={productCartProps ? "catalog__product-text in-cart" : "catalog__product-text"}>Essence Mascara Lash Princess</p>
                    <p className="catalog__product-price">110 $ </p>
                </div>
                {productCartProps ? <CartButtons /> : <button className="catalog__product-button">
                    <img src="/icons/cart.svg" alt="add to cart icon" />
                </button>}
                
            </div>

        </div>
    )
}

export default ProductCard;
