import { useEffect } from "react";
import CartItem from "../../components/cart-item/cart-item";
import Header from "../../components/header/header";
import { AppRoute } from "../../const/const";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { dropToken, getToken } from "../../service/token";
import { setUser, setInCartProducts, setCart } from "../../store/app-slice";
import { useGetCartsByUserIdQuery, useLazyGetCartsByUserIdQuery, useLazyGetUserByTokenQuery } from "../../store/products-api";
import "./cart-page.scss";
import { useNavigate } from "react-router-dom";


function CartPage(): React.JSX.Element {
    const token = getToken();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const cartProducts = useAppSelector((state) => state.appSlice.cartProducts);
    const [getUserBytoken] = useLazyGetUserByTokenQuery();
    const [getCartsByUserId] = useLazyGetCartsByUserIdQuery();
    useEffect(() => {
        if (cartProducts.length === 0) {
            getUserBytoken(token).unwrap()
            .then((result) => {
                dispatch(setUser(result))
                getCartsByUserId(result.id).unwrap()
                    .then((result) => {
                        dispatch(setInCartProducts(result.carts[0].products));
                        dispatch(setCart(result.carts[0]));
                    })
            })
            .catch((err) => {
                console.log(err);
                dropToken();
                navigate(AppRoute.Auth)
            })
        }  
    }, []);
    const userId = useAppSelector((state) => state.appSlice.user?.id);
    const {isLoading} = useGetCartsByUserIdQuery(userId as number);
    const totalQuantity = cartProducts.reduce((acc, currValue) => {
       return acc + currValue.quantity}, 0);

    const totalSum = cartProducts.reduce((acc, currValue) => {
        return acc + currValue.total;
    }, 0);

    const totalSumWithDiscount = cartProducts.reduce((acc, currValue) => {
        return acc + (currValue.total - ((currValue.total * currValue.discountPercentage) / 100))
    }, 0);

    if (cartProducts) {
        return (
            <>
            <Header />
            <div className="cart container">
                <h1 className="cart__title">My cart</h1>
                <div className="cart__wrapper">
                    <ul className="cart__list">
                    {isLoading ?
                        <div>Loading...</div> :
                        cartProducts.map((cartProduct) => <CartItem cartProduct={cartProduct} key={cartProduct.id}/>)}
                    </ul>
                    <div className="cart__total">
                        <p className="cart__total-count-text">
                            Total count:
                            <span className="cart__total-count-qty">{totalQuantity}</span>
                        </p>
                        <p className="cart__total-price-text">
                            Total price:
                            <span className="cart__total-price-sum">{totalSum.toFixed(2)}$</span>
                        </p>
                        <p className="cart__total-discount-text">
                            Total price with discount:
                            <span className="cart__total-discount-sum">{totalSumWithDiscount.toFixed(2)}$</span>
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
