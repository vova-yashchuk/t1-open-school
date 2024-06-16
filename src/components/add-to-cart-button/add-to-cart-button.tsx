import "./add-to-cart-button.scss";

function AddToCartButton(): React.JSX.Element {
    return (
        <button className="catalog__product-button" aria-label={`Add to cart`}>
            <img src="/icons/cart.svg" alt="add to cart icon" />
        </button>
    )
}

export default AddToCartButton;
