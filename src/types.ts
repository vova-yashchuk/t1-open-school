import { store } from "./store"

type DimensionsType = {
    width: number
    height: number,
    depth: number
}

type ReviewType = {
    rating: 2,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

type MetaType = {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string
}

export type Product = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: DimensionsType,
    warrantyInformation:  string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: ReviewType[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: MetaType,
    thumbnail: string,
    images: string[]
}

export type CartProduct = {
        id: number,
        title: string,
        price: number,
        quantity: number,
        total: number,
        discountPercentage: number,
        discountedTotal: number,
        thumbnail: string
}


export type Cart = {
            id: number,
            products: CartProduct[],
            total: number,
            discountedTotal: number,
            userId: number,
            totalProducts: number,
            totalQuantity: number
          }

export type Carts = {
    carts: Cart[],
    total: number,
    skip: number,
    limit: number
}

export type Data = {
    limit: number,
    products: Product[],
    skip: number,
    total: number
}

export type StyleType= {
    [key: string]: string
}

export type InitialStateType = {
    products: Product[]
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;