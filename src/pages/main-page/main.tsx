
import { Element } from "react-scroll";
import Search from "../../components/search/search";
import "./main.scss";
import ProductCard from "../../components/product-card/product-card";
import Faq from "../../components/faq/faq";
import Hero from "../../components/hero/hero";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from 'react-scroll';
import Header from "../../components/header/header";
import { useGetCartsByUserIdQuery, useGetProductsQuery, useLazyGetProductsQuery, useLazySearchProductsQuery } from "../../store/products-api";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setInCartProducts, setSearchText, setUserId } from "../../store/app-slice";
import { PRODUCTS_PER_PAGE, SCROLL_TO_CATALOG, SCROLL_TO_FAQ, USER_ID } from "../../const/const";
import CatalogBtn from "../../components/catalog-btn/catalog-btn";
import { Product } from "../../types";
import { isInCart } from "../../utils/utils";


function MainPage(): React.JSX.Element {

    const { data, isLoading, isError } = useGetProductsQuery({ limit: PRODUCTS_PER_PAGE, skip: 0 });
    const [products, setProducts] = useState<Product[]>([]);
    const [skipQty, setSkipQty] = useState(PRODUCTS_PER_PAGE);
    const searchText = useAppSelector((state) => state.appSlice.searchText);
    const [fetchSearchProducts, { isLoading: isSearchLoading }] = useLazySearchProductsQuery();
    const [fetchMoreProducts, { isLoading: isMoreProductsLoading }] = useLazyGetProductsQuery();
    const dispatch = useAppDispatch();
    dispatch(setUserId(USER_ID));
    const userId = useAppSelector((state) => state.appSlice.userId);

    const {data: cartData, isLoading: isCartDataLoading} = useGetCartsByUserIdQuery(userId);

    useEffect(() => {
        if (cartData) {
            dispatch(setInCartProducts(cartData?.carts[0].products));
        }   
    }, [isCartDataLoading]);

    const cartProducts = useAppSelector((state) => state.appSlice.cartProducts);

    const handleFetchMoreProducts = () => {
        fetchMoreProducts({ limit: PRODUCTS_PER_PAGE, skip: Number(skipQty) }).unwrap()
            .then((result) => {
                setProducts((prevProducts) => [...prevProducts, ...result.products])
            })
        setSkipQty((prev) => prev + PRODUCTS_PER_PAGE)
    }

    const handleFetchSearchProducts = () => {
        fetchSearchProducts(searchText).unwrap()
            .then((result) => {
                setProducts(result.products);
                dispatch(setSearchText(''));
            })
    }

    useEffect(() => {
        if (!isLoading && data) {
            setProducts(data?.products)
        }
    }, [isLoading]);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#catalog') {
            scroll.scrollTo(SCROLL_TO_CATALOG);
        }
        if (hash === '#faq') {
            scroll.scrollTo(SCROLL_TO_FAQ)
        }
    }, []);

    return (
        <div className="main__container">
            <Header />
            <Hero />
            <Element name="catalog">
                <section className="catalog">
                    <div className="container">
                        <h2 className="catalog__title">Catalog</h2>
                        <Search handleFetchSearch={handleFetchSearchProducts} isLoading={isSearchLoading} />
                        {isError ? <div className="error">error</div> : ''}
                        {isLoading ? <div className="catalog__products-wrapper">Loading...</div> :
                            <div className="catalog__products-wrapper">
                                {cartData && products?.map((product) => 
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        isInCart={isInCart(product.id, cartProducts)} />)}
                            </div>
                        }
                        {products.length >= PRODUCTS_PER_PAGE ?
                            <CatalogBtn
                                buttonProps={'Show more'}
                                handleFetchPoducts={handleFetchMoreProducts}
                                isLoading={isMoreProductsLoading} /> : ''
                        }

                    </div>
                </section>
            </Element>
            <Element name="faq" >
                <Faq />
            </Element>
        </div>
    )
}

export default MainPage;
