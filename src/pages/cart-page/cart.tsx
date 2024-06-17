import CartItem from "../../components/cart-item/cart-item";
import Header from "../../components/header/header";
import "./cart-page.scss";

function CartPage(): React.JSX.Element {
    return (
        <>
        <Header />
        <div className="cart container">
            <h1 className="cart__title">My cart</h1>
            <div className="cart__wrapper">
                <ul className="cart__list">
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
        </div></>
    )
}

export default CartPage;
