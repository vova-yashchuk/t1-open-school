import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {useGetSingleProductQuery, useUpdateCartMutation} from "../../store/products-api";
import "./cart-buttons.scss";
import { CartProduct} from "../../types";
import {changeCartInStore, changeCartProductQty, removeCartProduct} from "../../store/app-slice";

type CartButtonsProps = {
    productQty: number;
    product: CartProduct;
}

function CartButtons({ product }: CartButtonsProps): React.JSX.Element {
    const dispatch = useAppDispatch();
    const { data: singleProduct } = useGetSingleProductQuery(product.id);
    const [updateCart, { isError, isLoading }] = useUpdateCartMutation();
    const cartData = useAppSelector((state) => state.appSlice.cart);
    const cartId = cartData?.id;

    const handleAddCartQty = async () => {
        if (cartId) {
            const productsToUpdate = [{
                id: product.id,
                quantity: product.quantity + 1
            }];

            await updateCart({ cartId, productsToUpdate }).unwrap()
                .then((result) => {
                    dispatch(changeCartInStore(result));
                    dispatch(changeCartProductQty(result.products[result.products.length - 1]));
                });
        }
    }


    const handleDeacreaseCartQty = async () => {
        if (product.quantity <= 1) {
            dispatch(removeCartProduct(product.id));
        }
        if (cartId) {
            const productsToUpdate = [{
                id: product.id,
                quantity: product.quantity - 1
            }];
            await updateCart({ cartId, productsToUpdate }).unwrap()
                .then((result) => {
                    dispatch(changeCartInStore(result));
                    dispatch(changeCartProductQty(result.products[result.products.length - 1]));
                });
        }
        
    }

    const inputRef = useRef(null);

    const isDisabled = (stock: number | undefined, cartQty: number): boolean => {
        if (stock) {
            return cartQty >= stock;
        } else {
            return false;
        }
    };

    return (
        <div className="cart__info-buttons">
            <button className="cart__info-btn min-btn"
                onClick={handleDeacreaseCartQty} disabled={isLoading}>
                <img src="/icons/minus.svg" alt="" />
            </button>
            <input className="cart__info-qty" type="number" ref={inputRef} value={product.quantity} readOnly />
            <button className="cart__info-btn plus-btn"
                onClick={handleAddCartQty}
                disabled={isDisabled(singleProduct?.stock, product.quantity) || isLoading}>
                <img src="/icons/plus.svg" alt="" />
            </button>
            {isError ? <div className="error"> some error occured, please try again</div> : ''}
        </div>
    )
}

export default CartButtons;
