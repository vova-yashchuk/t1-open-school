import { useNavigate } from "react-router-dom";
import { CartProduct } from "../../types";
import CartButtons from "../cart-buttons/cart-buttons";
import "./cart-item.scss";
import { useAppDispatch } from "../../hooks/hooks";
import { removeCartProduct } from "../../store/app-slice";

type CartProductProps = {
    cartProduct: CartProduct;
}


function CartItem({cartProduct}: CartProductProps): React.JSX.Element {
    const navigate = useNavigate();
    const dispatch =useAppDispatch();

    const handleDeleteFromCart = (id: number): void => {
        dispatch(removeCartProduct(id));
    }

    return (
        <li className="cart__item">
            <div className="cart__picture-wrapper" onClick={() => navigate(`/product/${cartProduct.id}`)}>
                <picture>
                    <source srcSet={cartProduct.thumbnail} media="(max-width: 768px)"></source>
                    <source srcSet={cartProduct.thumbnail} media="(max-width: 1024px)"></source>
                    <source srcSet={cartProduct.thumbnail}></source>
                    <img src={cartProduct.thumbnail} alt="Image description" width={100} height={100}></img>
                </picture>
            </div>
            <div className="cart__info-wrapper">
                <p className="cart__info-text">{cartProduct.title}</p>
                <p className="cart__info-price">{cartProduct.price}$</p>
            </div>
            <CartButtons product={cartProduct} productQty={cartProduct.quantity}/>
            <button className="cart__delete-btn" onClick={() => handleDeleteFromCart(cartProduct.id)}>Delete</button>
        </li>
    )
}

export default CartItem;
