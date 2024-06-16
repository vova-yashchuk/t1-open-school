import { useParams } from "react-router-dom";
import SmallProductPicture from "../../components/small-poduct-picture/small-product-picture";
import "./product-page.scss";
import CatalogBtn from "../../components/catalog-btn/catalog-btn";
import Header from "../../components/header/header";
import { useGetSingleProductQuery } from "../../store/products-api";
import { useEffect, useState } from "react";
import CartButtons from "../../components/cart-buttons/cart-buttons";
import { useAppSelector } from "../../hooks/hooks";
import { countPriceWidthDiscount, isInCart } from "../../utils/utils";

function ProductPage(): React.JSX.Element {

    const paramsId = useParams();
    const {data, isLoading} = useGetSingleProductQuery(Number(paramsId.id))
    const cartProducts = useAppSelector((state) => state.appSlice.cartProducts);
    const [bigImage, setBigImage] = useState<string>('');

    useEffect(() => {
        if (data) {
            setBigImage(data?.images[0])
        } 
    }, [isLoading]);

    const handleSetImg = (src: string): void => {
        setBigImage(src);
    }

    const isImgActive = (src: string): boolean => bigImage === src;

    return (
        <>
        <Header />
        <div className="product__container">
            <section className="product container">
                <h1 className="product__title">Product {data?.id}</h1>
                <div className="product__wrapper">
                    <div className="product__images">
                        <div className="product__big-img">
                            {isLoading ? <div>Loading...</div> :
                                <picture>
                                    <source srcSet={bigImage} media="(max-width: 768px)"></source>
                                    <source srcSet={bigImage} media="(max-width: 1024px)"></source>
                                    <source srcSet={bigImage}></source>
                                    <img src={bigImage} alt="Image description" width={520} height={461}></img>
                                </picture>}
                        </div>
                        <div className="product__small-img-wrapper">
                            {data?.images.map((imgSrc) =>
                                <SmallProductPicture
                                    imgSrc={imgSrc}
                                    key={imgSrc}
                                    handleSetImg={handleSetImg}
                                    isActive={isImgActive(imgSrc)}/>)}
                        </div>
                    </div>
                    <div className="product__info">
                        <div className="product__info-top">
                            <h2 className="product__info-title">{data?.title}</h2>
                            <div className="product__info-id">
                                <span className="product__info-id">SKU ID</span>
                                <span className="product__info-id bold">{data?.sku}</span>
                            </div>
                        </div>
                        <ul className="product__characters">
                            <li className="product__characters-item">
                                <span className="product__characters-text">Rating</span>
                                <div className="product__characters-rating">
                                    {data && Array.from({length: data?.rating}).map(() => <img src="/icons/star.svg" alt="rating stars"/>)}
                                </div>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Base price</span>
                                <span className="product__characters-data">{`${data?.price}$`}</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Discount percentage</span>
                                <span className="product__characters-data">{data?.discountPercentage}%</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Discount price</span>
                                <span className="product__characters-data">
                                    {data && countPriceWidthDiscount(data?.price, data?.discountPercentage)}</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Stock</span>
                                <span className="product__characters-data">{data?.stock}</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Brand</span>
                                <span className="product__characters-data">{data?.brand}</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Category</span>
                                <span className="product__characters-data">{data?.category}</span>
                            </li>
                            <li className="product__characters-item">
                                <span className="product__characters-text">Description</span>
                                <span className="product__characters-data">{data?.description}</span>
                            </li>
                        </ul>

                        {isInCart(Number(paramsId.id), cartProducts) ? <CartButtons /> : <CatalogBtn buttonProps={'Add to cart'} searchData={[]} isLoading/>}
                        
                    </div>
                </div>

            </section>
        </div></>
    )
}

export default ProductPage;
