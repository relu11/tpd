import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: 'nav',
    initialState: {
        activeLink: '/'
    },
    reducers: {
        setActiveLink: (state, action) => {
            state.activeLink = action.payload;
        }
    }
});

export const { setActiveLink } = navigationSlice.actions;

export default navigationSlice.reducer;
