import CartItem from "../../components/cart-item/cart-item";
import "./cart-page.scss";

function CartPage(): React.JSX.Element {
    return (
        <div className="cart container">
            <h1 className="cart__title">My cart</h1>
            <div className="cart__wrapper">
                <ul className="cart__list">
                    {/* <li className="cart__item">
                        <div className="cart__picture-wrapper">
                            <picture>
                                <source srcSet="image-small.jpg" media="(max-width: 768px)"></source>
                                <source srcSet="image-medium.jpg" media="(max-width: 1024px)"></source>
                                <source srcSet="image-large.jpg"></source>
                                <img src="image-default.jpg" alt="Image description"></img>
                            </picture>
                        </div>
                        <div className="cart__info-wrapper">
                            <p className="cart__info-text">Essence Mascara Lash Princess</p>
                            <p className="cart__info-price">110 $ </p>
                        </div>
                        <div className="cart__info-buttons">
                            <button className="cart__info-btn min-btn">
                                <img src="" alt="" />
                            </button>
                            <input  className="cart__info-qty" type="number" />
                            <button className="cart__info-btn plus-btn">
                                <img src="" alt="" />
                            </button>
                        </div>
                        <button className="cart__delete-btn">Delete</button>
                    </li> */}
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </ul>
                <div className="cart__total">
                    <p className="cart__total-count-text">
                        Total count:
                        <span className="cart__total-count-qty">3</span>
                    </p>
                    <p className="cart__total-price-text">
                        Total price:
                        <span className="cart__total-price-sum">700 $</span>
                    </p>
                    <p className="cart__total-discount-text">
                        Total price with discount:
                        <span className="cart__total-discount-sum">590 $</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartPage;
