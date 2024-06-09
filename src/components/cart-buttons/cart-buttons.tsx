import "./cart-buttons.scss"

function CartButtons(): React.JSX.Element {
    return (
        <div className="cart__info-buttons">
            <button className="cart__info-btn min-btn">
                <img src="/icons/minus.svg" alt="" />
            </button>
            <input className="cart__info-qty" type="number" defaultValue={1}/>
            <button className="cart__info-btn plus-btn">
                <img src="/icons/plus.svg" alt="" />
            </button>
        </div>
    )
}

export default CartButtons;
