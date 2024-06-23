import { Link, useNavigate } from "react-router-dom";
import { Link as AnchorLink } from 'react-scroll';
import { AppRoute } from "../../const/const";
import "./nav.scss";
import { dropToken, getToken } from "../../service/token";
import { useAppSelector } from "../../hooks/hooks";

type NavigationProps = {
    navigationProps: 'footer' | 'header';
}

function Navigation({ navigationProps }: NavigationProps): React.JSX.Element {
    const token = getToken();
    const navigate = useNavigate();
    const cartProducts = useAppSelector((state) => state.appSlice.cartProducts);
    const productsQty = cartProducts.reduce((acc, currentValue) => {
        return acc + currentValue.quantity
    }, 0)

    const handleLogoutClick = () => {
        dropToken();
        navigate(AppRoute.Auth);
    }
    
    if (navigationProps === 'header') {
        if (window.location.pathname === '/') {
            return (
                <nav className="header__nav">
                    <AnchorLink smooth={true} duration={500} className="header__nav-link" to="catalog" aria-label="Go to Catalog section">Catalog</AnchorLink>
                    <AnchorLink smooth={true} duration={500} className="header__nav-link" to="faq" aria-label="Go to FAQ section">FAQ</AnchorLink>
                    <Link className="header__cart" to={AppRoute.Cart}>
                        <span className="header__link-text">Cart</span>
                        <img className="header__cart-icon" src="/icons/cart.svg" alt="cart icon" />
                        {productsQty ? <div className="header__cart-qty">{productsQty}</div> : ''}
                    </Link>
                    {token.length ? <span className="header__link-text logout-btn" onClick={handleLogoutClick}>LogOut
                        <img className="header__cart-icon logout-icon" src="/img/logout.svg" alt="logout-icon" width={18} height={18} />
                    </span> : ''}
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
                        {productsQty ? <div className="header__cart-qty">{productsQty}</div> : ''}
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
