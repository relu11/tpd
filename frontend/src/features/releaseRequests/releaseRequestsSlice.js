import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../app/config';

/**
 * @type {{status: 'idle' | 'success' | 'error', requests: Object[], filters: Object, currentRequest: Object}}
 */
const initialState = {
    status: 'idle',
    submitted: false,
    requests: [],
    currentRequest: null,
    filters: {
        managerName: '',
        employeeTitle: '',
        function: '',
        employeeName: '',
        requestStatus: '',
    },
};

export const formatRequest = request => {
    if (typeof request.release_date !== Date)
        request.release_date = new Date(request.release_date);
    request.release_date = `${request.release_date.getFullYear()}-${
        request.release_date.getMonth() + 1
    }-${request.release_date.getDate()}`;
    return request;
};

export const fetchReleaseRequests = createAsyncThunk(
    'release/fetchRequests',
    async () => {
        const requestOptions = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        console.log(`${API_URL}/requests/release`);
        const res = await fetch(`${API_URL}/requests/release`, requestOptions);
        const { requests } = await res.json();
        return requests;
    }
);

export const postReleaseRequest = createAsyncThunk(
    'release/postRequest',
    async request => {
        // Post the request to the api
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request),
        };
        await fetch(`${API_URL}/requests/release`, requestOptions);
        return formatRequest(request);
    }
);

export const patchReleaseRequest = createAsyncThunk(
    'release/patchRequest',
    async request => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request),
        };
        await fetch(
            `${API_URL}/requests/release/${request.referenceNumber}`,
            requestOptions
        );
    }
);

export const deleteReleaseRequest = createAsyncThunk(
    'release/deleteRequest',
    async requestId => {
        const requestOptions = {
            method: 'DELETE',
        };
        await fetch(`${API_URL}/requests/release/${requestId}`, requestOptions);
    }
);

export const getReleaseRequest = createAsyncThunk(
    'release/getRequest',
    async requestId => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        const res = await fetch(
            `${API_URL}/requests/release/${requestId}`,
            requestOptions
        );
        const { request } = await res.json();
        request.hasActionTaken = request.actionTaken ? true : false;
        return formatRequest(request);
    }
);

export const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        addReleaseRequests: (state, action) => {
            state.requests.push(action.payload);
        },
        updateFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        resetFilters: state => {
            Object.keys(state.filters).map(key => {
                state.filters[key] = '';
            });
        },
        clearAllReleaseRequests: state => {
            state.requests = [];
            state.status = 'idle';
        },
        clearAllCurrents: state => {
            state.submitted = false;
            state.currentRequest = null;
        },
        updateCurrentReleaseRequest: (state, action) => {
            Object.keys(action.payload).map(key => {
                state.currentRequest[key] = action.payload[key];
            });
        },
    },
    extraReducers: {
        [fetchReleaseRequests.fulfilled]: (state, action) => {
            state.status = 'success';
            state.requests = action.payload;
        },
        [postReleaseRequest.fulfilled]: state => {
            state.submitted = true;
            state.status = 'idle';
        },
        [getReleaseRequest.fulfilled]: (state, action) => {
            state.currentRequest = action.payload;
        },
        [patchReleaseRequest.fulfilled]: state => {
            state.submitted = true;
            state.status = 'idle';
        },
        [deleteReleaseRequest.fulfilled]: state => {
            state.submitted = true;
            state.status = 'idle';
        },
    },
});

export const {
    addReleaseRequests,
    updateFilters,
    clearAllCurrents,
    resetFilters,
    clearAllReleaseRequests,
    updateCurrentReleaseRequest,
} = requestsSlice.actions;

export const selectReleaseRequestsState = state => state.release.status;
export const selectCurrentReleaseRequest = state =>
    state.release.currentRequest;

export default requestsSlice.reducer;
