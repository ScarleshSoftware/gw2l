import {configureStore} from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import dailiesReducers from './dailies';

export const store = configureStore({
    reducer: {
        dailies: createSlice({
            name: 'Dailies',
            initialState: {},
            reducers: {}
        }).reducer
        // dailies: dailiesReducers
    }
});