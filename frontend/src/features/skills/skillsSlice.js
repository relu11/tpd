import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../app/config';

const initialState = {
    fetchEmployeeStatus: 'idle',
    fetchAllStatus: 'idle',
    yourSkills: [],
    allSkills: [],
    currentEmployeeSkill: null,
    currentSkill: null,
};

export const fetchEmployeeSkills = createAsyncThunk(
    '/skills/employee/fetch',
    async (_, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(`${API_URL}/skills/my`, requestOptions);
        const { skills } = await res.json();
        console.log(skills);
        return skills;
    }
);

export const fetchAllSkills = createAsyncThunk(
    '/skills/fetch',
    async (_, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(`${API_URL}/skills`, requestOptions);
        const { skills } = await res.json();
        return skills;
    }
);

export const postRemoveSkill = createAsyncThunk(
    '/skills/delete',
    async (skillId, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        await fetch(`${API_URL}/skills/${skillId}`, requestOptions);
        return skillId;
    }
);

export const postRemoveEmployeeSkill = createAsyncThunk(
    '/skills/employee/delete',
    async (skillId, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        await fetch(`${API_URL}/skills/my/${skillId}`, requestOptions);
        return skillId;
    }
);

export const postSkill = createAsyncThunk(
    '/skills/add',
    async (skillData, { getState }) => {
        const state = getState();
        console.log(skillData);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
            body: JSON.stringify(skillData),
        };
        const res = await fetch(`${API_URL}/skills`, requestOptions);
        const { skill } = await res.json();
        return skill;
    }
);

export const postEmployeeSkill = createAsyncThunk(
    '/skills/employee/add',
    async (skillData, { getState }) => {
        const state = getState();
        console.log(skillData);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
            body: JSON.stringify(skillData),
        };
        const res = await fetch(`${API_URL}/skills/my`, requestOptions);
        const { skill } = await res.json();
        return skill;
    }
);

export const fetchCurrentEmployeeSkill = createAsyncThunk(
    'skills/employee/current/fetch',
    async (skillId, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(
            `${API_URL}/skills/my/${skillId}`,
            requestOptions
        );
        const { skill } = await res.json();
        console.log({ skill });
        return skill;
    }
);

export const fetchCurrentSkill = createAsyncThunk(
    'skills/current/fetch',
    async (skillId, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
        };
        const res = await fetch(`${API_URL}/skills/${skillId}`, requestOptions);
        const { skill } = await res.json();
        console.log({ skill });
        return skill;
    }
);

export const patchCurrentSkill = createAsyncThunk(
    'skills/current/patch',
    async (skillData, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
            body: JSON.stringify(skillData),
        };
        await fetch(`${API_URL}/skills/${skillData.skillId}`, requestOptions);
        return skillData;
    }
);

export const patchCurrentEmployeeSkill = createAsyncThunk(
    'skills/employee/current/patch',
    async (skillData, { getState }) => {
        const state = getState();
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${state.auth.currentUser.token}`,
            },
            body: JSON.stringify(skillData),
        };
        await fetch(
            `${API_URL}/skills/my/${skillData.skillId}`,
            requestOptions
        );
        return skillData;
    }
);

export const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        updateCurrentSkill: (state, action) => {
            Object.keys(action.payload).map(key => {
                state.currentSkill[key] = action.payload[key];
            });
        },
        updateCurrentEmployeeSkill: (state, action) => {
            Object.keys(action.payload).map(key => {
                state.currentEmployeeSkill[key] = action.payload[key];
            });
        },
    },
    extraReducers: {
        [fetchEmployeeSkills.fulfilled]: (state, action) => {
            state.yourSkills = action.payload;
            state.fetchEmployeeStatus = 'success';
        },
        [fetchAllSkills.fulfilled]: (state, action) => {
            state.allSkills = action.payload;
            state.fetchAllStatus = 'success';
        },
        [postRemoveSkill.fulfilled]: state => {
            state.fetchAllStatus = 'idle';
        },
        [postRemoveEmployeeSkill.fulfilled]: state => {
            state.fetchEmployeeStatus = 'idle';
        },
        [postSkill.fulfilled]: state => {
            state.fetchAllStatus = 'idle';
        },
        [postEmployeeSkill.fulfilled]: state => {
            state.fetchEmployeeStatus = 'idle';
        },
        [fetchCurrentEmployeeSkill.fulfilled]: (state, action) => {
            state.fetchEmployeeStatus = action.payload;
        },
        [fetchCurrentSkill.fulfilled]: (state, action) => {
            state.fetchAllStatus = action.payload;
            state.currentSkill = action.payload;
        },
        [patchCurrentSkill.fulfilled]: state => {
            state.fetchAllStatus = 'idle';
        },
        [patchCurrentEmployeeSkill.fulfilled]: state => {
            state.fetchEmployeeStatus = 'idle';
        },
    },
});

export const {
    updateCurrentSkill,
    updateCurrentEmployeeSkill,
} = skillsSlice.actions;

export default skillsSlice.reducer;
