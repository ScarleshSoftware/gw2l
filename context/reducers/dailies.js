import { detailedDailies, todayDailies, tomorrowDailies } from '../actions/dailies';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    today: null,
    tomorrow: null,
    details: null,
}

const dailiesReducers = createSlice({
    name: 'Dailies',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getTodayDailies.fulfilled, (state, action) => {
          state.today = JSON.parse(action.payload)
        })
        builder.addCase(getTomorrowDailies.fulfilled, (state, action) => {
          state.tomorrow = JSON.parse(action.payload)
        })
        builder.addCase(getDetailsDailies.fulfilled, (state, action) => {
          state.details = action.payload
        })
    }
})

export const getTodayDailies = createAsyncThunk('dailies/today', async () => {
    return JSON.stringify(await todayDailies())
});
export const getTomorrowDailies = createAsyncThunk('dailies/tomorrow', async () => {
    return JSON.stringify(await tomorrowDailies())
});
export const getDetailsDailies = createAsyncThunk('dailies/details', async () => {
    return JSON.stringify(await detailedDailies())
});
export default dailiesReducers.reducer;