function SmallProductPicture(): React.JSX.Element {
    return (
        <div className="product__small-img">
            <picture>
                <source srcSet="/img/small-image.png" media="(max-width: 768px)"></source>
                <source srcSet="/img/small-image.png" media="(max-width: 1024px)"></source>
                <source srcSet="/img/small-image.png"></source>
                <img src="/img/small-image.png" alt="Image description"></img>
            </picture>
        </div>
    )
}

export default SmallProductPicture;
