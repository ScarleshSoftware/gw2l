import Daily from "../../models/daily";

const todayDailiesURL = "https://api.guildwars2.com/v2/achievements/daily"
const tomorrowDailiesURL = "https://api.guildwars2.com/v2/achievements/daily/tomorrow"
const individualDailyURL = "https://api.guildwars2.com/v2/achievements?wiki=1&lang=en&ids="

export const GET_TODAY_DAILIES = "GET_TODAY_DAILIES";
export const GET_TOMORROW_DAILIES = "GET_TOMORROW_DAILIES";
export const GET_DETAILS_DAILIES = "GET_DETAILS_DAILIES";

export const todayDailies = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(todayDailiesURL);
            if (!response.ok)
                throw new Error("Request failed")

            const jsonized = await response.json();
            const listID = []
            for (const i in jsonized) {
                for (const j in jsonized[i]) {
                    listID.push(jsonized[i][j].id)
                }
            }
            const listDailies = await (await fetch(individualDailyURL + listID.join())).json()
            const lst = []
            for (const i in listDailies) {
                lst.push(new Daily(listDailies[i]))
            }
            dispatch({ type: GET_TODAY_DAILIES, today: lst });
        } catch (err) {
            throw err
        }
    }
}

export const tomorrowDailies = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(tomorrowDailiesURL);
            if (!response.ok)
                throw new Error("Request failed")

            const jsonized = await response.json();
            const listID = []
            for (const i in jsonized) {
                for (const j in jsonized[i]) {
                    listID.push(jsonized[i][j].id)
                }
            }
            var listDailies = await (await fetch(individualDailyURL + listID.join())).json()
            const lst = []
            for (const i in listDailies) {
                lst.push(new Daily(listDailies[i]))
            }
            dispatch({ type: GET_TOMORROW_DAILIES, tomorrow: lst });
        } catch (err) {
            throw err
        }
    }
}

export const detailedDailies = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(individualDailyURL + id);
            if (!response.ok)
                throw new Error("Request failed")

            const jsonized = await response.json();
            dispatch({ type: GET_DETAILS_DAILIES, details: jsonized[0] });
        } catch (err) {
            throw err
        }
    }
}