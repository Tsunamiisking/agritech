import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice ({
    name : 'favorite',
    initialState: {
        items: []
    },
    reducers: {
        addToFavorite(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (!existingItem) {
                state.items.push(newItem);
            }
        },
        removeFromFavorite(state, action) {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        }
    }
})


export const {addToFavorite, removeFremoveFromFavoritero} = favoriteSlice.actions;
export default favoriteSlice.reducer;