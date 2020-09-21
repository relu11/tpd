import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * @type {{state: 'idle' | 'success' | 'error', requests: Object[]}}
 */
const initialState = {
    status: "idle",
    submitted: false,
    requests: [],
    filters: {
        managerName: "",
        employeeTitle: "",
        employeeFunction: "",
        employeeName: "",
        requestStatus: "",
    },
};

export const fetchReleaseRequests = createAsyncThunk(
    "release/fetchRequests",
    async () => {
        const fakeReleaseRequqsts = [
            {
                reference_number: 1,
                managerName: "Islam Mohamed",
                employeeName: "Ziad Abdelrahman",
                employeeID: "skajdniebfaekfdjbnas",
                employeeTitle: "Software Engineer",
                employeeFunction: ".Net",
                releaseDate: new Date().toLocaleString(),
                propability: 50,
                releasePercentage: 40,
                releaseReason: "Probably leaving",
                leaving: true,
                requestStatus: "Left",
            },
            {
                reference_number: 2,
                managerName: "Ziad Abdelrahman",
                employeeName: "Islam Mohamed",
                employeeID: "skajdniebfaekfdjbnas",
                employeeTitle: "Software Engineer",
                employeeFunction: ".Net",
                releaseDate: new Date().toLocaleString(),
                propability: 50,
                releasePercentage: 40,
                releaseReason: "Probably leaving",
                leaving: true,
                requestStatus: "Left",
            },
            {
                reference_number: 3,
                managerName: "Islam Mohamed",
                employeeName: "Ziad Abdelrahman",
                employeeID: "skajdniebfaekfdjbnas",
                employeeTitle: "Software Engineer",
                employeeFunction: ".Net",
                releaseDate: new Date().toLocaleString(),
                propability: 50,
                releasePercentage: 40,
                releaseReason: "Probably leaving",
                leaving: true,
                requestStatus: "Left",
            },
            {
                reference_number: 4,
                managerName: "Ziad Abdelrahman",
                employeeName: "Islam Mohamed",
                employeeID: "skajdniebfaekfdjbnas",
                employeeTitle: "Software Engineer",
                employeeFunction: ".Net",
                releaseDate: new Date().toLocaleString(),
                propability: 50,
                releasePercentage: 40,
                releaseReason: "Probably leaving",
                leaving: true,
                requestStatus: "Left",
            },
        ];
        return fakeReleaseRequqsts;
    }
);

export const postReleaseRequest = createAsyncThunk(
    "release/postRequest",
    async (request) => {
        // Post the request to the api
        return request;
    }
);

export const requestsSlice = createSlice({
    name: "requests",
    initialState,
    reducers: {
        addReleaseRequests: (state, action) => {
            state.requests.push(action.payload);
        },
        updateFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearSubmittedStatus: (state) => {
            state.submitted = false;
        },
    },
    extraReducers: {
        [fetchReleaseRequests.fulfilled]: (state, action) => {
            state.status = "success";
            console.log(action);
            state.requests = action.payload;
        },
        [postReleaseRequest.fulfilled]: (state, action) => {
            state.requests.push(action.payload);
            state.submitted = true;
        },
    },
});

export const {
    addReleaseRequests,
    updateFilters,
    clearSubmittedStatus,
} = requestsSlice.actions;

export const selectReleaseRequestsState = (state) => state.release.status;

export default requestsSlice.reducer;
