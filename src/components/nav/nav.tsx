import { Link } from "react-router-dom";
import { Link as AnchorLink } from 'react-scroll';
import { AppRoute } from "../../const/const";
import "./nav.scss";

type NavigationProps = {
    navigationProps: 'footer' | 'header';
}

function Navigation({ navigationProps }: NavigationProps): React.JSX.Element {
    if (navigationProps === 'header') {
        return (
            <nav className="header__nav">
                <AnchorLink smooth={true} duration={500} className="header__nav-link" to="catalog">Catalog</AnchorLink>
                <AnchorLink smooth={true} duration={500} className="header__nav-link" to="faq">FAQ</AnchorLink>
                <Link className="header__cart" to={AppRoute.Cart}>
                    <span className="header__link-text">Cart</span>
                    <img src="/icons/cart.svg" alt="cart icon" />
                    <div className="header__cart-qty">1</div>
                </Link>
            </nav>
        )
    } else {
        return (
            <nav className="footer__nav">
                <AnchorLink className="header__nav-link" to="catalog">Catalog</AnchorLink>
                <AnchorLink className="header__nav-link" to="faq">FAQ</AnchorLink>
            </nav>
        )
    }
}

export default Navigation;
