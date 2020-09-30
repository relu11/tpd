import { createSlice } from '@reduxjs/toolkit';

/**
 * @type {{
 *  currentUser: {
 *      token: String,
 *      email: String,
 *      name: String,
 *      role: 'tpd' | 'manager' | 'employee'
 *  }
 * }}
 */

const initialState = {
    currentUser: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser: (state, payload) => {
            state.currentUser = payload.user;
        },
    },
});

export const { setCurrentUser } = authSlice.actions;

export const selectCurrentUser = state => state.currentUser;

export default authSlice.reducer;
