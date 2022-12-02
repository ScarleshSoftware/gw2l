import {configureStore} from '@reduxjs/toolkit';
import dailiesReducers from './dailies';

export const store = configureStore({
    reducer: {
        dailies: dailiesReducers
    }
});