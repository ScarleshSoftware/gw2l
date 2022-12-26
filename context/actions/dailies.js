import Daily from "../../models/daily";

const todayDailiesURL = "https://api.guildwars2.com/v2/achievements/daily"
const tomorrowDailiesURL = "https://api.guildwars2.com/v2/achievements/daily/tomorrow"
const individualDailyURL = "https://api.guildwars2.com/v2/achievements?wiki=1&lang=en&ids="

export const todayDailies = async () => {
    try {
        const response = await fetch(todayDailiesURL);
        if (!response.ok)
            throw new Error("Request failed")

        const jsonized = await response.json();
        const listID = []
        const lst = {}
        for (const i in jsonized) {
            lst[i] = []
            for (const j in jsonized[i]) {
                listID.push(jsonized[i][j].id)
            }
        }
        const listDailies = await(await fetch(individualDailyURL + listID.join())).json()

        for (const i in listDailies) {
            if(jsonized["pve"].map( x => x['id']).includes(listDailies[i]["id"]))
                lst['pve'].push(new Daily(listDailies[i]))
            else if(jsonized["wvw"].map( x => x['id']).includes(listDailies[i]["id"]))
                lst['wvw'].push(new Daily(listDailies[i]))
            else if(jsonized["pvp"].map( x => x['id']).includes(listDailies[i]["id"]))
                lst['pvp'].push(new Daily(listDailies[i]))
            else if(jsonized["fractals"].map( x => x['id']).includes(listDailies[i]["id"]))
                lst['fractals'].push(new Daily(listDailies[i]))
            else if(jsonized["special"].map( x => x['id']).includes(listDailies[i]["id"]))
                lst['special'].push(new Daily(listDailies[i]))
        }
        return lst;
    } catch (err) {
        throw err
    }
}

export const tomorrowDailies = async () => {
    try {
        const response = await fetch(tomorrowDailiesURL);
        if (!response.ok)
            throw new Error("Request failed")

        const jsonized = await response.json();
        const listID = []
        const lst = {}
        for (const i in jsonized) {
            lst[i] = []
            for (const j in jsonized[i]) {
                listID.push(jsonized[i][j].id)
            }
        }
        var listDailies = await(await fetch(individualDailyURL + listID.join())).json()
        for (const i in listDailies) {
            if(jsonized["pve"].map( x => x['id']).includes(listDailies[i]["id"]))
                lst['pve'].push(new Daily(listDailies[i]))
            else if(jsonized["wvw"].map( x => x['id']).includes(listDailies[i]["id"]))
                lst['wvw'].push(new Daily(listDailies[i]))
            else if(jsonized["pvp"].map( x => x['id']).includes(listDailies[i]["id"]))
                lst['pvp'].push(new Daily(listDailies[i]))
            else if(jsonized["fractals"].map( x => x['id']).includes(listDailies[i]["id"]))
                lst['fractals'].push(new Daily(listDailies[i]))
            else if(jsonized["special"].map( x => x['id']).includes(listDailies[i]["id"]))
                lst['special'].push(new Daily(listDailies[i]))
        }
        return lst;
    } catch (err) {
        throw err
    }
}

export const detailedDailies = async(id) => {
    try {
        const response = await fetch(individualDailyURL + id);
        if (!response.ok)
            throw new Error("Request failed")

        const jsonized = await response.json();
        return jsonized;
    } catch (err) {
        throw err
    }
}