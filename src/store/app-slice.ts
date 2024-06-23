import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const/const';
import { Cart, CartProduct, User } from '../types';

export type AppSlice = {
  user: User | null;
  cartProducts: CartProduct[];
  searchText: string;
  skipQty: number;
  cart: Cart | null;
  productToUpdateQty: number;
}

const initialState: AppSlice = {
  user: null,
  cartProducts: [],
  searchText: '',
  skipQty: 0,
  cart: null,
  productToUpdateQty: 0,
};

export const slice = {
    app: NameSpace.appSlice
}

export const appSlice = createSlice({
  name: slice.app,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = {...state.user, ...action.payload};
    },
    setInCartProducts: (state, action: PayloadAction<CartProduct[]>) => {
      state.cartProducts = action.payload;
    },
    setProductToUpdateQty: (state, action: PayloadAction<number>) => {
      state.productToUpdateQty = action.payload;
    },
    addInCartProducts: (state, action: PayloadAction<CartProduct[]>) => {
      state.cartProducts = state.cartProducts.concat(action.payload);
    },
    changeCartProductQty: (state, action: PayloadAction<CartProduct>) => {
      state.cartProducts = state.cartProducts.map((product) => {
        return product.id === action.payload.id ? action.payload : product
      }) 
    },
    removeCartProduct: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts.filter((product) => product.id !== action.payload)
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setSkipQty: (state, action: PayloadAction<number>) => {
      state.skipQty = action.payload;
    },
    setCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
    changeCartInStore: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    }
  }
});

export const {
  setUser,
  setInCartProducts,
  setSearchText,
  setSkipQty,
  setCart,
  changeCartInStore,
  addInCartProducts,
  changeCartProductQty,
  removeCartProduct,
  setProductToUpdateQty
} = appSlice.actions;