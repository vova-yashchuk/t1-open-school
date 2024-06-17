import CartItem from "../../components/cart-item/cart-item";
import Header from "../../components/header/header";
import { USER_ID } from "../../const/const";
import { useAppSelector } from "../../hooks/hooks";
import { useGetCartsByUserIdQuery } from "../../store/products-api";
import "./cart-page.scss";

function CartPage(): React.JSX.Element {
    const userId = useAppSelector((state) => state.appSlice.userId);
    const {data, isLoading} = useGetCartsByUserIdQuery(userId | USER_ID);

    if (data && data?.carts.length > 0) {
        return (
            <>
            <Header />
            <div className="cart container">
                <h1 className="cart__title">My cart</h1>
                <div className="cart__wrapper">
                    <ul className="cart__list">
                    {isLoading ?
                        <div>Loading...</div> :
                        data?.carts[0].products.map((cartProduct) => <CartItem cartProduct={cartProduct} key={cartProduct.id}/>)}
                    </ul>
                    <div className="cart__total">
                        <p className="cart__total-count-text">
                            Total count:
                            <span className="cart__total-count-qty">{data?.carts[0].totalQuantity}</span>
                        </p>
                        <p className="cart__total-price-text">
                            Total price:
                            <span className="cart__total-price-sum">{data?.carts[0].total}$</span>
                        </p>
                        <p className="cart__total-discount-text">
                            Total price with discount:
                            <span className="cart__total-discount-sum">{data?.carts[0].discountedTotal}$</span>
                        </p>
                    </div>
                </div>
            </div></>
        )
    } else {
        return (
            <>
            <Header />
            <div className="cart container">
                <h1 className="cart__title">My cart</h1>
                <div className="cart__wrapper">
                    <ul className="cart__list">
                        <li>Your cart is empty</li>
                    </ul>
                    <div className="cart__total">
                        <p className="cart__total-count-text">
                            Total count:
                            <span className="cart__total-count-qty">0</span>
                        </p>
                        <p className="cart__total-price-text">
                            Total price:
                            <span className="cart__total-price-sum">0</span>
                        </p>
                        <p className="cart__total-discount-text">
                            Total price with discount:
                            <span className="cart__total-discount-sum">0</span>
                        </p>
                    </div>
                </div>
            </div></>
        )
    }
    
}

export default CartPage;
