
import { Element } from "react-scroll";
import Search from "../../components/search/search";
import "./main.scss";
import ProductCard from "../../components/product-card/product-card";
import Faq from "../../components/faq/faq";
import Hero from "../../components/hero/hero";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from 'react-scroll';
import Header from "../../components/header/header";
import { useGetProductsQuery, useLazyGetCartsByUserIdQuery, useLazyGetProductsQuery, useLazyGetUserByTokenQuery} from "../../store/products-api";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCart, setInCartProducts, setSkipQty, setUser } from "../../store/app-slice";
import { AppRoute, PRODUCTS_PER_PAGE, SCROLL_TO_CATALOG, SCROLL_TO_FAQ} from "../../const/const";
import CatalogBtn from "../../components/catalog-btn/catalog-btn";
import { CartProduct, Product } from "../../types";
import { isInCart } from "../../utils/utils";
import { dropToken, getToken } from "../../service/token";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/loader";

function MainPage(): React.JSX.Element {
    const token = getToken();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [getUserBytoken, { isError: isUserError }] = useLazyGetUserByTokenQuery();
    const [getCartsByUserId] = useLazyGetCartsByUserIdQuery();
    const { data, isLoading } = useGetProductsQuery({ limit: PRODUCTS_PER_PAGE, skip: 0, search: '' });
    const [products, setProducts] = useState<Product[]>([]);
    const [limit, setLimit] = useState(PRODUCTS_PER_PAGE);
    const searchText = useAppSelector((state) => state.appSlice.searchText);
    const [fetchMoreProducts, { isLoading: isMoreProductsLoading }] = useLazyGetProductsQuery();
    const cartData = useAppSelector((state) => state.appSlice.cart)
    const cartProducts = useAppSelector((state) => state.appSlice.cartProducts);

    useEffect(() => {
        if (isLoading) {
            getUserBytoken(token).unwrap()
            .then((result) => {
                dispatch(setUser(result))
                getCartsByUserId(result.id).unwrap()
                    .then((result) => {
                        dispatch(setInCartProducts(result.carts[0].products));
                        dispatch(setCart(result.carts[0]));
                    })
            })
            .catch((err) => {
                console.log(err);
                dropToken();
                navigate(AppRoute.Auth)
            })
        }
    }, []);

    const getCartProduct = (currentProductId: number, cartProducts: CartProduct[]): CartProduct => {
        return (cartProducts.find(({id}) => currentProductId === id)) as CartProduct;
    }
    
    let skipQty = useAppSelector((state) => state.appSlice.skipQty);

    const handleFetchMoreProducts = () => {
        dispatch(setSkipQty(skipQty += PRODUCTS_PER_PAGE));
        fetchMoreProducts({ limit: PRODUCTS_PER_PAGE, skip: Number(skipQty), search: searchText }).unwrap()
            .then((result) => {
                setProducts((prevProducts) => [...prevProducts, ...result.products]);
                setLimit(result.limit);
            }) 
            
    }

    const handleFetchSearchProducts = () => {
        dispatch(setSkipQty(skipQty = 0));
        fetchMoreProducts({ limit: PRODUCTS_PER_PAGE, skip: Number(skipQty), search: searchText }).unwrap()
            .then((result) => {
                setProducts(result.products);
                setLimit(result.limit);
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
                        <Search handleFetchSearch={handleFetchSearchProducts} isLoading={isMoreProductsLoading} />
                        {isUserError ? <div className="error">error</div> : ''}
                        {isLoading ? <div className="catalog__products-wrapper"><Loader height={'100%'}/></div> :
                            <div className="catalog__products-wrapper">
                                {cartData && products?.map((product) => 
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        isInCart={isInCart(product.id, cartProducts)} 
                                        cartProduct={getCartProduct(product.id, cartProducts)}
                                        />)
                                        
                                        }
                            </div>
                        }
                        {limit && limit >= PRODUCTS_PER_PAGE ?
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
