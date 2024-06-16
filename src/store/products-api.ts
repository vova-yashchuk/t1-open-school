import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cart, Carts, Data, Product } from "../types";

type GetProductsParams = {
    limit: number,
    skip: number,
    search: string
}



export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (build) => {
        return {
        getProducts: build.query<Data, GetProductsParams>({
            query: ({search, limit, skip}) => {
                if (search === '') {
                    return `products?limit=${limit}&skip=${skip}`
                } else {
                    return `products/${search && `search?q=${search}&limit=${limit}&skip=${skip}`}`
                }
            } ,
            keepUnusedDataFor: 60,
        }),
        getCartsByUserId: build.query<Carts, number | ''>({
            query: (userId = '') => `carts/user/${userId && userId}`
        }),
        getCartById: build.query<Cart, number>({
            query: (id) => `carts/${id && id}`
        }),
        getSingleProduct: build.query<Product, number>({
            query: (id) => `products/${id && id}`
        })
        }

    }
});

export const {
    useGetProductsQuery,
    useLazyGetProductsQuery,
    // useLazySearchProductsQuery,
    // useSearchProductsQuery,
    useGetCartsByUserIdQuery,
    useGetCartByIdQuery,
    useGetSingleProductQuery,
    } = productsApi;