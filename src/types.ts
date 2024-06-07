export type Product = {
    id: number,
    srcSet: SrcSet,
    imgSrc: string,
    name: string,
    price: number
}

type SrcSet = {
    small: string,
    medium: string,
    large: string
}