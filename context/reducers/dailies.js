import { GET_DETAILS_DAILIES, GET_TODAY_DAILIES, GET_TOMORROW_DAILIES } from "../actions/dailies"

const initialState = {
    today: null,
    tomorrow: null,
    details: null,
}


export default dailiesReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODAY_DAILIES:
            if (state.today !== action.today)
                return { ...state, today: action.today }
            return state;
        case GET_TOMORROW_DAILIES:
            if (state.tomorrow !== action.tomorrow)
                return { ...state, tomorrow: action.tomorrow }
            return state;
        case GET_DETAILS_DAILIES:
            if (state.details !== action.details){
                return { ...state, details: action.details }
            }
            return state;
        default:
            return state;
    }
}