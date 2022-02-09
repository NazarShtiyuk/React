import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../services/cars.service";

export const getCars = createAsyncThunk(
    'carSlice/getCars',
    async (_, {rejectedWithValue}) => {
        try {
            return await carsService.getAll();
        } catch (e) {
            rejectedWithValue(e.message)
        }
    }
)

export const createCarThunk = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carsService.createCar(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carsService.deleteCar(id)
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getCars.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
        },
        [getCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const carsReducer = carSlice.reducer;
export const {addCar, deleteCar} = carSlice.actions;

export default carsReducer;