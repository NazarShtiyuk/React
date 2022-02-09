import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsService} from "../services/comments.service";

export const getComments = createAsyncThunk(
    'commentsSlice/getComments',
    async (_, {rejectWithValue}) => {
        try {
            return await commentsService.getAll();
        }catch (e) {
            rejectWithValue(e.message)
        }
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getComments.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getComments.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const commentsReducer = commentsSlice.reducer;

export default commentsReducer;