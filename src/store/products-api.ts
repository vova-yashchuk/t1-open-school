import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cart, Carts, Data, Product } from "../types";

type GetProductsParams = {
    limit: number,
    skip: number
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (build) => ({
        getProducts: build.query<Data, GetProductsParams>({
            query: ({limit, skip}) => `products?limit=${limit}&skip=${skip}`,
        }),
        searchProducts: build.query<Data, string>({
            query: (search = '') => `products/${search && `search?q=${search}`}`,
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
    })
});

export const {
    useGetProductsQuery,
    useLazyGetProductsQuery,
    useLazySearchProductsQuery,
    useSearchProductsQuery,
    useGetCartsByUserIdQuery,
    useGetCartByIdQuery,
    useGetSingleProductQuery,
    } = productsApi;