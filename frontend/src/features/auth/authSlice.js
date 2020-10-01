import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwt from 'jsonwebtoken';
import { API_URL } from '../../app/config';

/**
 * @type {{
 *  currentUser: {
 *      token: String,
 *      email: String,
 *      name: String,
 *      role: 'tpd' | 'manager' | 'employee'
 *  },
 *  status: 'success' | 'error' | 'idle',
 *  error: null | String
 * }}
 */

const initialState = {
    currentUser: null,
    status: 'idle',
    error: null,
};

export const postLogin = createAsyncThunk(
    '/auth/login',
    async ({ email, password }) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        };

        const res = await fetch(`${API_URL}/login`, requestOptions);
        const { token } = await res.json();
        const payload = jwt.decode(token);
        payload.token = token;
        return payload;
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
    extraReducers: {
        [postLogin.fulfilled]: (state, action) => {
            state.status = 'success';
            state.error = null;
            state.currentUser = action.payload;
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
        },
        [postLogin.rejected]: state => {
            state.status = 'error';
            state.error = 'Wrong email or password';
        },
    },
});

export const { setCurrentUser } = authSlice.actions;

export const selectCurrentUser = state => state.currentUser;

export default authSlice.reducer;
