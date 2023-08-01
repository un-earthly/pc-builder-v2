import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/interface/product.interface';

interface PCBuilderState {
    selectedComponents: {
        [category: string]: Product | null;
    };
}

const initialState: PCBuilderState = {
    selectedComponents: {
        cpu: null,
        motherboard: null,
        ram: null,
        psu: null,
        storage: null,
        monitor: null,
    },
};

export const pcBuilderSlice = createSlice({
    name: 'pcBuilder',
    initialState,
    reducers: {
        setSelectedComponent: (state, action: PayloadAction<{ category: string; product: Product }>) => {
            state.selectedComponents[action.payload.category.toLowerCase()] = action.payload.product;
        },
        removeSelectedComponent: (state, action: PayloadAction<string>) => {
            state.selectedComponents[action.payload.toLowerCase()] = null;
        },
    },
});

export const { setSelectedComponent, removeSelectedComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
