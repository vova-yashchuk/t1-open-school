import "./small-product.picture.scss";

type SmallImgProps = {
    imgSrc: string;
    handleSetImg: (src: string) => void;
    isActive: boolean;
}

function SmallProductPicture({imgSrc, handleSetImg, isActive}: SmallImgProps): React.JSX.Element {
    return (
        <div className={`"product__small-img" ${isActive ? "is-active" : ""}`} onClick={() => handleSetImg(imgSrc)}>
            <picture>
                <source srcSet={imgSrc} media="(max-width: 768px)"></source>
                <source srcSet={imgSrc} media="(max-width: 1024px)"></source>
                <source srcSet={imgSrc}></source>
                <img src={imgSrc} alt="Image description" width={70} height={75}></img>
            </picture>
        </div>
    )
}

export default SmallProductPicture;
