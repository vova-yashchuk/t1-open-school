import { combineReducers } from "@reduxjs/toolkit";
import { productsApi } from "./products-api";
import { appSlice, slice } from "./app-slice";


export const rootReducer = combineReducers({
    [productsApi.reducerPath]: productsApi.reducer,
    [slice.app]: appSlice.reducer
  });
  
  export type RootReducerType = ReturnType<typeof rootReducer>;