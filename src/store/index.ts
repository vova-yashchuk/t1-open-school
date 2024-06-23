import {configureStore} from '@reduxjs/toolkit';
import { productsApi } from './products-api';
import { rootReducer } from './root-reducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});
