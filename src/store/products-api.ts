import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cart, Carts, Data, Login, Product, User } from "../types";
import { Token } from "../service/token";

type GetProductsParams = {
    limit: number,
    skip: number,
    search: string
}

export type ProductToUpdate = {
    id: number,
    quantity: number
}

export type CartToUpdate = {
    cartId: number;
    productsToUpdate: ProductToUpdate[];
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
        getCartsByUserId: build.query<Carts, number>({
            query: (userId) => `carts/user/${userId && userId}`
        }),
        getCartById: build.query<Cart, number>({
            query: (id) => `carts/${id && id}`
        }),
        getSingleProduct: build.query<Product, number>({
            query: (id) => `products/${id && id}`
        }),
        postUserLogin: build.query<User, Login>({
            query: (body) => ({
                url: `/auth/login`,
                method: 'POST',
                body,
            })
        }),
        getUserByToken: build.query<User, Token>({
            query: (token) => ({
                url: `/auth/me`,
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            }) 
        }),
        updateCart: build.mutation<Cart, CartToUpdate>({
            query: ({cartId, productsToUpdate}) => ({
                url:`/carts/${cartId}`,
                method: 'PUT',
                body: {
                    products: productsToUpdate,
                }
            })
        })
        }

    }
});

export const {
    useGetProductsQuery,
    useLazyGetProductsQuery,
    useGetCartsByUserIdQuery,
    useLazyGetCartsByUserIdQuery,
    useGetCartByIdQuery,
    useGetSingleProductQuery,
    usePostUserLoginQuery,
    useLazyPostUserLoginQuery,
    useGetUserByTokenQuery,
    useLazyGetUserByTokenQuery,
    useUpdateCartMutation,
    } = productsApi;