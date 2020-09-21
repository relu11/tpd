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

export const fetchResourceRequests = createAsyncThunk(
    "resource/fetchRequests",
    async () => {
        const fakeResourceRequqsts = [
            {
                referenceNumber: 1,
                managerName: "Islam Mohamed",
                employeeFunction: ".Net",
                title: "Software Engineer",
                startDate: new Date().toLocaleString(),
                endDate: new Date().toLocaleString(),
                propability: 50,
                percentage: 40,
                status: "Left",
                coreTeamMember: true,
                replacement: true,
                replecementFor: "sdadgs",
                requestsCount: 2,
                comment: "bla bla bla",
                actualPercentage: 60,
            },
            {
                referenceNumber: 2,
                managerName: "Islam Mohamed",
                employeeFunction: ".Net",
                title: "Software Engineer",
                startDate: new Date().toLocaleString(),
                endDate: new Date().toLocaleString(),
                propability: 50,
                percentage: 40,
                status: "Left",
                coreTeamMember: true,
                replacement: true,
                replecementFor: "sdadgs",
                requestsCount: 2,
                comment: "bla bla bla",
                actualPercentage: 60,
            },
            {
                referenceNumber: 3,
                managerName: "Islam Mohamed",
                employeeFunction: ".Net",
                title: "Software Engineer",
                startDate: new Date().toLocaleString(),
                endDate: new Date().toLocaleString(),
                propability: 50,
                percentage: 40,
                status: "Left",
                coreTeamMember: true,
                replacement: true,
                replecementFor: "sdadgs",
                requestsCount: 2,
                comment: "bla bla bla",
                actualPercentage: 60,
            },
            {
                referenceNumber: 4,
                managerName: "Ziad Abdelrahman",
                employeeFunction: ".Net",
                title: "Software Engineer",
                startDate: new Date().toLocaleString(),
                endDate: new Date().toLocaleString(),
                propability: 50,
                percentage: 40,
                status: "Left",
                coreTeamMember: true,
                replacement: true,
                replecementFor: "sdadgs",
                requestsCount: 2,
                comment: "bla bla bla",
                actualPercentage: 60,
            },
            {
                referenceNumber: 5,
                managerName: "Ziad Abdelrahman",
                employeeFunction: ".Net",
                title: "Software Engineer",
                startDate: new Date().toLocaleString(),
                endDate: new Date().toLocaleString(),
                propability: 50,
                percentage: 40,
                status: "Left",
                coreTeamMember: true,
                replacement: true,
                replecementFor: "sdadgs",
                requestsCount: 2,
                comment: "bla bla bla",
                actualPercentage: 60,
            },
        ];
        return fakeResourceRequqsts;
    }
);

export const postResourceRequest = createAsyncThunk(
    "resource/postRequest",
    async (request) => {
        // Post the request to the api
        return request;
    }
);

export const requestsSlice = createSlice({
    name: "requests",
    initialState,
    reducers: {
        addResourceRequests: (state, action) => {
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
        [fetchResourceRequests.fulfilled]: (state, action) => {
            state.status = "success";
            console.log(action);
            state.requests = action.payload;
        },
        [postResourceRequest.fulfilled]: (state, action) => {
            state.requests.push(action.payload);
            state.submitted = true;
        },
    },
});

export const {
    addResourceRequests,
    updateFilters,
    clearSubmittedStatus,
} = requestsSlice.actions;

export const selectResourceRequestsState = (state) => state.resource.status;

export default requestsSlice.reducer;
