import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../services/users.service";

export const getUsers = createAsyncThunk(
    'usersSlice/getUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await usersService.getAll()
            return users;
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const usersReducer = usersSlice.reducer;

export default usersReducer;