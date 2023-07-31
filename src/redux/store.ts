import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from "./slices/productSlice"
import { ProductState } from '@/interface/product.interface';

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
    },
});
export type RootState = {
    products: ProductState;
};
export default store;
