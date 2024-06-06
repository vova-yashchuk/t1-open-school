import CatalogBtn from "../catalog-btn/catalog-btn";
import "./search.scss";

function Search(): React.JSX.Element {
    return (
        <div className="catalog__search-wrapper">
            <input className="catalog__search-input" type="text" placeholder="Search by title" />
            <CatalogBtn buttonProps={'Search'} />
        </div>
    )
}

export default Search;
