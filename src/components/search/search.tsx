import CatalogBtn from "../catalog-btn/catalog-btn";
import "./search.scss";

function Search(): React.JSX.Element {
    return (
        <div className="catalog__search-wrapper">
            <input className="catalog__search-input" type="text" placeholder="Search by title" aria-label="Search products by title"/>
            <CatalogBtn buttonProps={'Search'} aria-label="Search products" />
        </div>
    )
}

export default Search;
