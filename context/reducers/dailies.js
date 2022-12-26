import { detailedDailies, todayDailies, tomorrowDailies } from '../actions/dailies';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getCurrentDaily from '../../helpers/dailyCycleNonApi'

const initialState = {
    today: {"pve": null, "fractals": null, "wvw": null, "pvp": null, "extra": null},
    tomorrow: {"pve": null, "fractals": null, "wvw": null, "pvp": null, "extra": null},
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
  let apiDailies = await todayDailies()
  apiDailies["extra"] = getCurrentDaily()
  return JSON.stringify(apiDailies)
});
export const getTomorrowDailies = createAsyncThunk('dailies/tomorrow', async () => {
  let apiDailies = await tomorrowDailies()
  apiDailies["extra"] = getCurrentDaily(1)
  return JSON.stringify(apiDailies)
});
export const getDetailsDailies = createAsyncThunk('dailies/details', async () => {
  return JSON.stringify(await detailedDailies())
});
export default dailiesReducers.reducer;