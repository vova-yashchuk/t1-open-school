import { Link } from "react-router-dom";
import { Product } from "../../types";
import CartButtons from "../cart-buttons/cart-buttons";
import "./product-card.scss";

type ProductCardProps = {
    isInCart: boolean;
    product: Product;
}

function ProductCard({ isInCart, product }: ProductCardProps): React.JSX.Element {
    const { id, title, price, thumbnail } = product;
        return (
            <div className="catalog__product" role="listitem">
                <Link className="catalog__product-link" to={`/product/${id}`} aria-label={`View details for ${title}`}>
                    <div className="catalog__product-img-wrapper">
                        <div className="catalog_product-img-effect"></div>
                        <picture>
                            <source srcSet={thumbnail} media="(max-width: 768px)"></source>
                            <source srcSet={thumbnail} media="(max-width: 1024px)"></source>
                            <source srcSet={thumbnail}></source>
                            <img className="catalog__product-img" src={thumbnail} alt={`${title} product image`} width={370} height={293}></img>
                        </picture>
                    </div>
                </Link>
                <div className="catalog__product-wrapper">
                    <div className="catalog__product-info">
                        <p className={isInCart ? "catalog__product-text in-cart" : "catalog__product-text"}>{title}</p>
                        <p className="catalog__product-price">{`${price} $`}</p>
                    </div>
                    {isInCart ? <CartButtons /> : <button className="catalog__product-button" aria-label={`Add ${title} to cart`}>
                        <img src="/icons/cart.svg" alt="add to cart icon" />
                    </button>}

                </div>

            </div>
        )
    }

export default ProductCard;
