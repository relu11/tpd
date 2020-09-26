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
        manager_name: '',
        title: '',
        function: '',
        status: '',
    },
};

export const formatRequest = request => {
    request.probability = request.propability;
    if (typeof request.start_date !== Date) {
        request.start_date = new Date(request.start_date);
        request.start_date = `${request.start_date.getFullYear()}-${
            request.start_date.getMonth() + 1
        }-${request.start_date.getDate()}`;
    }
    if (typeof request.end_date !== Date) {
        request.end_date = new Date(request.end_date);
        request.end_date = `${request.end_date.getFullYear()}-${
            request.end_date.getMonth() + 1
        }-${request.end_date.getDate()}`;
    }
    return request;
};

export const fetchResourceRequests = createAsyncThunk(
    'resource/fetchRequests',
    async () => {
        const requestOptions = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        console.log(`${API_URL}/requests/resource`);
        const res = await fetch(`${API_URL}/requests/resource`, requestOptions);
        const { requests } = await res.json();
        console.log(requests);
        return requests;
    }
);

export const postResourceRequest = createAsyncThunk(
    'resource/postRequest',
    async request => {
        // Post the request to the api
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request),
        };
        await fetch(`${API_URL}/requests/resource`, requestOptions);
        return formatRequest(request);
    }
);

export const patchResourceRequest = createAsyncThunk(
    'resource/patchRequest',
    async request => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request),
        };
        await fetch(
            `${API_URL}/requests/resource/${request.reference_number}`,
            requestOptions
        );
    }
);

export const deleteResourceRequest = createAsyncThunk(
    'resource/deleteRequest',
    async requestId => {
        const requestOptions = {
            method: 'DELETE',
        };
        await fetch(
            `${API_URL}/requests/resource/${requestId}`,
            requestOptions
        );
    }
);

export const getResourceRequest = createAsyncThunk(
    'resource/getRequest',
    async requestId => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };
        const res = await fetch(
            `${API_URL}/requests/resource/${requestId}`,
            requestOptions
        );
        const { request } = await res.json();
        request.hasActionTaken = request.action_taken ? true : false;
        return formatRequest(request);
    }
);

export const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        addResourceRequests: (state, action) => {
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
        clearAllResourceRequests: state => {
            state.requests = [];
            state.status = 'idle';
        },
        clearAllCurrents: state => {
            state.submitted = false;
            state.currentRequest = null;
        },
        updateCurrentResourceRequest: (state, action) => {
            Object.keys(action.payload).map(key => {
                state.currentRequest[key] = action.payload[key];
            });
        },
    },
    extraReducers: {
        [fetchResourceRequests.fulfilled]: (state, action) => {
            state.status = 'success';
            state.requests = action.payload;
        },
        [postResourceRequest.fulfilled]: state => {
            state.submitted = true;
            state.status = 'idle';
        },
        [getResourceRequest.fulfilled]: (state, action) => {
            state.currentRequest = action.payload;
        },
        [patchResourceRequest.fulfilled]: state => {
            state.submitted = true;
            state.status = 'idle';
        },
        [deleteResourceRequest.fulfilled]: state => {
            state.submitted = true;
            state.status = 'idle';
        },
    },
});

export const {
    addResourceRequests,
    updateFilters,
    clearAllCurrents,
    resetFilters,
    clearAllResourceRequests,
    updateCurrentResourceRequest,
} = requestsSlice.actions;

export const selectResourceRequestsState = state => state.resource.status;
export const selectCurrentResourceRequest = state =>
    state.resource.currentRequest;

export default requestsSlice.reducer;
