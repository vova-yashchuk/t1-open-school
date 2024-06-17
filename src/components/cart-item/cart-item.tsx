import CartButtons from "../cart-buttons/cart-buttons";
import "./cart-item.scss";

function CartItem(): React.JSX.Element {
    return (
        <li className="cart__item">
            <div className="cart__picture-wrapper">
                <picture>
                    <source srcSet="/img/cart-product.png" media="(max-width: 768px)"></source>
                    <source srcSet="/img/cart-product.png" media="(max-width: 1024px)"></source>
                    <source srcSet="/img/cart-product.png"></source>
                    <img src="/img/cart-product.png" alt="Image description"></img>
                </picture>
            </div>
            <div className="cart__info-wrapper">
                <p className="cart__info-text">Essence Mascara Lash Princess</p>
                <p className="cart__info-price">110 $ </p>
            </div>
            <CartButtons />
            <button className="cart__delete-btn">Delete</button>
        </li>
    )
}

export default CartItem;
