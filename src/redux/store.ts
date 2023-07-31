import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productSlice from "./slices/productSlice"
import pcBuilderSlice from './slices/pcBuilderSlice';

const rootReducer = combineReducers({
    products: productSlice,
    pcBuilder: pcBuilderSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
