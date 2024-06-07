import { Link as AnchorLink } from "react-scroll";
import "./catalog-btn.scss";

type ButtonProps = {
    buttonProps: 'Go to shopping' | 'Search' | 'Show more' | 'Add to cart';
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
        default:
            return (
                <button className="catalog-btn">{buttonProps}</button>
            )
    }
}

export default CatalogBtn;
