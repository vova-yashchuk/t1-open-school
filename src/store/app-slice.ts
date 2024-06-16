import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const/const';
import { CartProduct } from '../types';


export type AppSlice = {
  userId: number;
  cartProducts: CartProduct[];
  searchText: string;
  skipQty: number;
}

const initialState: AppSlice = {
  userId: 0,
  cartProducts: [],
  searchText: '',
  skipQty: 0
};

export const slice = {
    app: NameSpace.appSlice
}

export const appSlice = createSlice({
  name: slice.app,
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    setInCartProducts: (state, action: PayloadAction<CartProduct[]>) => {
      state.cartProducts = state.cartProducts.concat(action.payload)
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setSkipQty: (state, action: PayloadAction<number>) => {
      state.skipQty = action.payload;
    }
  }
});

export const {setUserId, setInCartProducts, setSearchText, setSkipQty} = appSlice.actions;