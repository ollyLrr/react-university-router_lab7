
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArtworks = createAsyncThunk(
    "artworks/fetchArtworks",
    async (query = "monet") => {
        const res = await fetch(
            `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}&limit=20&fields=id,title,image_id,artist_title,date_display`
        );
        if (!res.ok) throw new Error("Failed to fetch artworks");
        const data = await res.json();
        return data.data;
    }
);

const artworksSlice = createSlice({
    name: "artworks",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        query: "monet",
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtworks.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchArtworks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchArtworks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { setQuery } = artworksSlice.actions;
export default artworksSlice.reducer;
