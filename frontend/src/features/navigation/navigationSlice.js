import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: "nav",
    initialState: {
        activeLink: "/",
        drawerOpen: true,
        customDrawerAction: false,
    },
    reducers: {
        setActiveLink: (state, action) => {
            state.activeLink = action.payload;
        },
        toggleDrawerOpen: (state) => {
            state.drawerOpen = !state.drawerOpen;
            state.customDrawerAction = true;
        },
        openDrawer: (state) => {
            state.drawerOpen = true;
        },
        closeDrawer: (state) => {
            state.drawerOpen = false;
        },
    },
});

export const {
    setActiveLink,
    toggleDrawerOpen,
    openDrawer,
    closeDrawer,
} = navigationSlice.actions;

export default navigationSlice.reducer;
