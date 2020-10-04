import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../app/config';

const initialState = {
    fetchStatus: 'idle',
    yourTrainings: [],
    currentTrainings: null,
};

export const fetchEmployeeTrainings = createAsyncThunk(
    '/trainings/employee/fetch',
    async (_, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(`${API_URL}/trainings/my`, requestOptions);
        const { trainings } = await res.json();
        console.log(trainings);
        return trainings;
    }
);
export const fetchAllTrainings = createAsyncThunk(
    '/trainings/fetch',
    async (_, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(`${API_URL}/trainings`, requestOptions);
        const { trainings } = await res.json();
        console.log(trainings);
        return trainings;
    }
);

export const trainingsSlice = createSlice({
    name: 'trainings',
    initialState,
    reducers: {
        updateCurrentTrainings: (state, action) => {
            Object.keys(action.payload).map(key => {
                state.currentTrainings[key] = action.payload[key];
            });
        },
    },
    extraReducers: {
        [fetchEmployeeTrainings.fulfilled]: (state, action) => {
            state.yourTrainings = action.payload;
            state.fetchStatus = 'success';
        },
        [fetchAllTrainings.fulfilled]: (state, action) => {
            state.yourTrainings = action.payload;
            state.fetchStatus = 'success';
        },
    },
});

export const { updateCurrentTrainings } = trainingsSlice.actions;

export default trainingsSlice.reducer;
