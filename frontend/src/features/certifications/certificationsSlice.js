import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../app/config';

const initialState = {
    fetchStatus: 'idle',
    yourCertifications: [],
    currentEmployeeCertification: null,
    currentCertification: null,
};

export const fetchEmployeeCertifications = createAsyncThunk(
    '/certifications/employee/fetch',
    async (_, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(`${API_URL}/certifications/my`, requestOptions);
        const { certifications } = await res.json();
        console.log(certifications);
        return certifications;
    }
);

export const fetchAllCertifications = createAsyncThunk(
    '/certifications/fetch',
    async (_, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(`${API_URL}/certifications`, requestOptions);
        const { certifications } = await res.json();
        console.log(certifications);
        return certifications;
    }
);

export const postRemoveCertification = createAsyncThunk(
    '/certifications/delete',
    async (certificationId, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        await fetch(
            `${API_URL}/certifications/${certificationId}`,
            requestOptions
        );
        return certificationId;
    }
);

export const postRemoveEmployeeCertification = createAsyncThunk(
    '/certifications/employee/delete',
    async (certificationId, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        await fetch(
            `${API_URL}/certifications/my/${certificationId}`,
            requestOptions
        );
        return certificationId;
    }
);

export const postCertification = createAsyncThunk(
    '/certifications/add',
    async (certificationData, { getState }) => {
        const state = getState();
        console.log(certificationData);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
            body: JSON.stringify(certificationData),
        };
        const res = await fetch(`${API_URL}/certifications`, requestOptions);
        const { certification } = await res.json();
        return certification;
    }
);

export const postEmployeeCertification = createAsyncThunk(
    '/certifications/employee/add',
    async (certificationData, { getState }) => {
        const state = getState();
        console.log(certificationData);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
            body: JSON.stringify(certificationData),
        };
        const res = await fetch(`${API_URL}/certifications/my`, requestOptions);
        const { certification } = await res.json();
        return certification;
    }
);

export const fetchCurrentEmployeeCertification = createAsyncThunk(
    'certifications/employee/current/fetch',
    async (certificationId, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(
            `${API_URL}/certifications/my/${certificationId}`,
            requestOptions
        );
        const { certification } = await res.json();
        console.log({ certification });
        return certification;
    }
);

export const fetchCurrentCertification = createAsyncThunk(
    'certifications/current/fetch',
    async (certificationId, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(
            `${API_URL}/certifications/${certificationId}`,
            requestOptions
        );
        const { certification } = await res.json();
        console.log({ certification });
        return certification;
    }
);

export const patchCurrentCertification = createAsyncThunk(
    'certifications/current/patch',
    async (certificationData, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
            body: JSON.stringify(certificationData),
        };
        await fetch(
            `${API_URL}/certifications/${certificationData.certificationId}`,
            requestOptions
        );
        return certificationData;
    }
);

export const patchCurrentEmployeeCertification = createAsyncThunk(
    'certifications/employee/current/patch',
    async ({ data, certificationId }, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
            body: JSON.stringify(data),
        };
        await fetch(
            `${API_URL}/certifications/my/${certificationId}`,
            requestOptions
        );
        return data;
    }
);

export const certificationsSlice = createSlice({
    name: 'certifications',
    initialState,
    reducers: {
        updateCurrentCertification: (state, action) => {
            Object.keys(action.payload).map(key => {
                state.currentCertification[key] = action.payload[key];
            });
        },
        updateCurrentEmployeeCertification: (state, action) => {
            Object.keys(action.payload).map(key => {
                state.currentEmployeeCertification[key] = action.payload[key];
            });
        },
    },
    extraReducers: {
        [fetchEmployeeCertifications.fulfilled]: (state, action) => {
            state.yourCertifications = action.payload;
            state.fetchStatus = 'success';
        },
        [fetchAllCertifications.fulfilled]: (state, action) => {
            state.certifications = action.payload;
            state.fetchStatus = 'success';
        },
        [postRemoveCertification.fulfilled]: state => {
            state.fetchStatus = 'idle';
        },
        [postRemoveEmployeeCertification.fulfilled]: state => {
            state.fetchStatus = 'idle';
        },
        [postCertification.fulfilled]: state => {
            state.fetchStatus = 'idle';
        },
        [postEmployeeCertification.fulfilled]: state => {
            state.fetchStatus = 'idle';
        },
        [fetchCurrentEmployeeCertification.fulfilled]: (state, action) => {
            state.currentEmployeeCertification = action.payload;
        },
        [fetchCurrentCertification.fulfilled]: (state, action) => {
            state.currentCertification = action.payload;
        },
        [patchCurrentCertification.fulfilled]: state => {
            state.fetchStatus = 'idle';
        },
        [patchCurrentEmployeeCertification.fulfilled]: state => {
            state.fetchStatus = 'idle';
        },
    },
});

export const {
    updateCurrentCertification,
    updateCurrentEmployeeCertification,
} = certificationsSlice.actions;

export default certificationsSlice.reducer;
