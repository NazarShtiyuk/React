import {createSlice} from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        toDo: []
    },
    reducers: {
        addToDo: (state, action) => {
            state.toDo.push({
                id: new Date().getTime(), ...action.payload.data
            })
        },
        deleteToDo: (state, action) => {
            state.toDo = state.toDo.filter(value => value.id !== action.payload.id)
        }
    }
})

const toDoReducer = toDoSlice.reducer;
export const {addToDo, deleteToDo} = toDoSlice.actions;

export default toDoReducer;