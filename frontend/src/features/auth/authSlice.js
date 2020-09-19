import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
    },
    reducers: {
        setCurrentUser: (state, payload) => {
            state.currentUser = payload.user;
        }
    }
});

export const { setCurrentUser } = authSlice.actions;

export const selectCurrentUser = state => state.currentUser;

export default authSlice.reducer;
