import { Link } from "react-router-dom";
import { Product } from "../../types";
import CartButtons from "../cart-buttons/cart-buttons";
import "./product-card.scss";
import AddToCartButton from "../add-to-cart-button/add-to-cart-button";

export type ProductCardProps = {
    isInCart: boolean;
    product: Product;
}

function ProductCard({ isInCart, product }: ProductCardProps): React.JSX.Element {
    const { id, title, price, images } = product;
        return (
            <div className="catalog__product" role="listitem">
                <Link className="catalog__product-link" to={`/product/${id}`} aria-label={`View details for ${title}`}>
                    <div className="catalog__product-img-wrapper">
                        <div className="catalog_product-img-effect"></div>
                        <picture>
                            <source srcSet={images[0]} media="(max-width: 768px)"></source>
                            <source srcSet={images[0]} media="(max-width: 1024px)"></source>
                            <source srcSet={images[0]}></source>
                            <img className="catalog__product-img" src={images[0]} alt={`${title} product image`} width={370} height={293}></img>
                        </picture>
                    </div>
                </Link>
                <div className="catalog__product-wrapper">
                    <div className="catalog__product-info">
                        <p className={isInCart ? "catalog__product-text in-cart" : "catalog__product-text"}>{title}</p>
                        <p className="catalog__product-price">{`${price} $`}</p>
                    </div>
                    {isInCart ? <CartButtons /> : <AddToCartButton />}

                </div>

            </div>
        )
    }

export default ProductCard;
