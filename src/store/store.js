import { configureStore } from "@reduxjs/toolkit";
import artworksReducer from "../features/artworks/artworksSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
    reducer: {
        artworks: artworksReducer,
        ui: uiReducer
    }
});
