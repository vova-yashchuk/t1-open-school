import { Link as AnchorLink } from "react-scroll";
import "./catalog-btn.scss";
import { AppRoute } from "../../const/const";
import { Link } from "react-router-dom";

type ButtonProps = {
    buttonProps: 'Go to shopping' | 'Search' | 'Show more' | 'Add to cart' | 'На главную';
}

function CatalogBtn({buttonProps}: ButtonProps): React.JSX.Element {
    switch (buttonProps) {
        case 'Go to shopping':
            return (
                <AnchorLink className="hero__button catalog-btn" to="catalog">{buttonProps}</AnchorLink>
            )
        case 'Search':
            return (
                <button className="catalog__search-button catalog-btn">{buttonProps}</button>
            )
        case 'Show more':
            return (
                <button className="catalog__show-more-button catalog-btn">{buttonProps}</button>
            )
        case 'Add to cart':
            return (
                <button className="catalog__add-button catalog-btn">{buttonProps}</button>
            )
        case 'На главную':
            return (
                <Link to={AppRoute.Root} className="catalog__add-button catalog-btn">{buttonProps}</Link>
            )
        default:
            return (
                <button className="catalog-btn">{buttonProps}</button>
            )
    }
}

export default CatalogBtn;
