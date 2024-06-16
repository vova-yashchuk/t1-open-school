import { Link } from "react-router-dom";
import { Link as AnchorLink } from 'react-scroll';
import { AppRoute, USER_ID } from "../../const/const";
import "./nav.scss";
import { useGetCartsByUserIdQuery } from "../../store/products-api";
import { useAppSelector } from "../../hooks/hooks";

type NavigationProps = {
    navigationProps: 'footer' | 'header';
}

function Navigation({ navigationProps }: NavigationProps): React.JSX.Element {
    const userId = useAppSelector((state) => state.appSlice.userId)
    const {data: cartData} = useGetCartsByUserIdQuery(userId | USER_ID);
    
    if (navigationProps === 'header') {
        if (window.location.pathname === '/') {
            return (
                <nav className="header__nav">
                    <AnchorLink smooth={true} duration={500} className="header__nav-link" to="catalog" aria-label="Go to Catalog section">Catalog</AnchorLink>
                    <AnchorLink smooth={true} duration={500} className="header__nav-link" to="faq" aria-label="Go to FAQ section">FAQ</AnchorLink>
                    <Link className="header__cart" to={AppRoute.Cart}>
                        <span className="header__link-text">Cart</span>
                        <img className="header__cart-icon" src="/icons/cart.svg" alt="cart icon" />
                        {cartData?.carts[0].products.length ? <div className="header__cart-qty">{cartData?.carts[0].products.length}</div> : ''}
                    </Link>
                </nav>
            )
        } else {
            return (
                <nav className="header__nav">
                    <Link className="header__nav-link" to={AppRoute.RootCatalog} aria-label="Go to Catalog page">Catalog</Link>
                    <Link className="header__nav-link" to={AppRoute.RootFaq} aria-label="Go to FAQ page">FAQ</Link>
                    <Link className="header__cart" to={AppRoute.Cart} aria-label="Go to Cart">
                        <span className="header__link-text">Cart</span>
                        <img className="header__cart-icon" src="/icons/cart.svg" alt="cart icon" />
                        {cartData?.carts[0].products.length ? <div className="header__cart-qty">{cartData?.carts[0].products.length}</div> : ''}
                    </Link>
                </nav>
            )
        }

    } else {
        return (
            <nav className="footer__nav">
                <AnchorLink smooth={true} duration={500} className="header__nav-link" to="catalog" aria-label="Go to Catalog section">Catalog</AnchorLink>
                <AnchorLink smooth={true} duration={500} className="header__nav-link" to="faq" aria-label="Go to FAQ section">FAQ</AnchorLink>
            </nav>
        )
    }
}

export default Navigation;
