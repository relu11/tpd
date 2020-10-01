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
        title: '',
        function: '',
        status: '',
    },
};

export const formatRequest = request => {
    if (typeof request.startDate !== Date) {
        request.startDate = new Date(request.startDate);
        request.startDate = `${request.startDate.getFullYear()}-${
            request.startDate.getMonth() + 1
        }-${request.startDate.getDate()}`;
    }
    if (typeof request.endDate !== Date) {
        request.endDate = new Date(request.endDate);
        request.endDate = `${request.endDate.getFullYear()}-${
            request.endDate.getMonth() + 1
        }-${request.endDate.getDate()}`;
    }
    return request;
};

export const fetchResourceRequests = createAsyncThunk(
    'resource/fetchRequests',
    async (_, { getState }) => {
        const state = getState();
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
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
    async (request, { getState }) => {
        const state = getState();
        // Post the request to the api
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
            body: JSON.stringify(request),
        };
        await fetch(`${API_URL}/requests/resource`, requestOptions);
        return formatRequest(request);
    }
);

export const patchResourceRequest = createAsyncThunk(
    'resource/patchRequest',
    async (request, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
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
    async (requestId, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        await fetch(
            `${API_URL}/requests/resource/${requestId}`,
            requestOptions
        );
    }
);

export const getResourceRequest = createAsyncThunk(
    'resource/getRequest',
    async (requestId, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(
            `${API_URL}/requests/resource/${requestId}`,
            requestOptions
        );
        const { request } = await res.json();
        request.hasActionTaken = request.action_taken ? true : false;
        request.actionChanged = false;
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
