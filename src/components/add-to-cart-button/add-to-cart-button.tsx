
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useUpdateCartMutation } from "../../store/products-api";
import { Product } from "../../types";
import "./add-to-cart-button.scss";
import { addInCartProducts, changeCartInStore, setProductToUpdateQty } from "../../store/app-slice";

type AddToCartButtonProps = {
    product: Product;
}

function AddToCartButton({ product }: AddToCartButtonProps): React.JSX.Element {
    const dispatch = useAppDispatch();
    const cartData = useAppSelector((state) => state.appSlice.cart);
    const cartId = cartData?.id;
    const productsToUpdate = [{
        id: product.id,
        quantity: 1
    }];
    

    const [updateCart, { isError }] = useUpdateCartMutation();

    const handleCartUpdate = async () => {
        if (cartId) {
            dispatch(setProductToUpdateQty(1));
            await updateCart({ cartId, productsToUpdate }).unwrap()
                .then((result) => {
                    dispatch(changeCartInStore(result));
                    dispatch(addInCartProducts(result.products.slice(-1)));
                });
        }
        
    }
    return (
        <>
        <button className="catalog__product-button" aria-label={`Add to cart`} onClick={handleCartUpdate}>
            <img src="/icons/cart.svg" alt="add to cart icon" />
        </button>
        {isError ? <div className="error"> some error occured, please try again</div> : ''}
        </>
    )
}

export default AddToCartButton;
