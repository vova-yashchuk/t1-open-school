import { Link } from "react-router-dom";
import { Product } from "../../types";
import CartButtons from "../cart-buttons/cart-buttons";
import "./product-card.scss";

type ProductCardProps = {
    isInCart: boolean;
    product: Product;
}

function ProductCard({ isInCart, product }: ProductCardProps): React.JSX.Element {
    const { id, name, imgSrc, srcSet, price } = product;
    return (
        <div className="catalog__product" role="listitem">
            <Link className="catalog__product-link" to={`/product/${id}`} aria-label={`View details for ${name}`}>
                <div className="catalog__product-img-wrapper">
                    <div className="catalog_product-img-effect"></div>
                    <picture>
                        <source srcSet={srcSet.small} media="(max-width: 768px)"></source>
                        <source srcSet={srcSet.medium} media="(max-width: 1024px)"></source>
                        <source srcSet={srcSet.large}></source>
                        <img className="catalog__product-img" src={imgSrc} alt={`${name} product image`} ></img>
                    </picture>
                </div>
            </Link>
            <div className="catalog__product-wrapper">
                <div className="catalog__product-info">
                    <p className={isInCart ? "catalog__product-text in-cart" : "catalog__product-text"}>{name}</p>
                    <p className="catalog__product-price">{`${price} $`}</p>
                </div>
                {isInCart ? <CartButtons /> : <button className="catalog__product-button" aria-label={`Add ${name} to cart`}>
                    <img src="/icons/cart.svg" alt="add to cart icon" />
                </button>}

            </div>

        </div>
    )
}

export default ProductCard;
