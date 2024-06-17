
import CatalogBtn from "../catalog-btn/catalog-btn";
import "./search.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setSearchText } from "../../store/app-slice";

export type SearchProps = {
    handleFetchSearch: () => void;
    isLoading: boolean
}

function Search({handleFetchSearch, isLoading}: SearchProps): React.JSX.Element {
    const dispatch = useAppDispatch();
    const searchText = useAppSelector((state) => state.appSlice.searchText);

    return (
        <div className="catalog__search-wrapper">
            <input
                className="catalog__search-input"
                type="text"
                placeholder="Search by title"
                aria-label="Search products by title"
                value={searchText}
                onChange={(evt) => dispatch(setSearchText(evt.target.value))}/>
            <CatalogBtn buttonProps={'Search'} handleFetchSearch={handleFetchSearch} isLoading={isLoading} aria-label="Search products" />
        </div>
    )
}

export default Search;
