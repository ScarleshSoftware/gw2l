import eventCreator from '../helpers/eventCreator'
const moment = require('moment');

const firstSpawns = [
    moment.duration({
        hours: 1,
    }),
    moment.duration({
        hours: 1,
        minutes: 15,
    }),
    moment.duration({
        hours: 1,
        minutes: 30,
    }),
    moment.duration({
        hours: 1,
        minutes: 45,
    }),
    moment.duration({
        hours: 2,
    }),
    moment.duration({
        minutes: 15,
    }),
    moment.duration({
        hours: 2,
        minutes: 30,
    }),
    moment.duration({
        minutes: 30,
    }),
    moment.duration({
        minutes: 0,
    }),
    moment.duration({
        minutes: 30,
    }),
    moment.duration({
        minutes: 0,
    }),
    moment.duration({
        hours: 1,
    }),
    moment.duration({
        hours: 2,
    }),
]

const allTheBosses = [
    "Shatterer", "Jungle Wurm", "Modniir Ulgoth", "Shadow Behemoth", "Golem Mark II",
    "Svanir Shaman", "Claw of Jormag", "Fire Elemental", "Taidha Covington", "Megadestroyer",
    "Tequatl the Sunless", "Triple Trouble", "Karka Queen"]

const backPics = [
    require('../assets/sha.png'),
    require('../assets/jw.png'),
    require('../assets/mu.png'),
    require('../assets/sb.png'),
    require('../assets/gm.png'),
    require('../assets/ss.png'),
    require('../assets/jor.png'),
    require('../assets/fe.png'),
    require('../assets/tc.png'),
    require('../assets/md.png'),
    require('../assets/teq.png'),
    require('../assets/tt.png'),
    require('../assets/kq.png'),
]

const descriptions = [
    ["Shatterer\nLowland Burns\n(Blazeridge Steppes)"],
    ["Jungle Wurm\nWychmire Swamp\n(Caledon Forest)"],
    ["Modniir Ulgoth\nModniir Gorge\n(Harathi Hinterlands)"],
    ["Shadow Behemoth\nGodslost Swamp\n(Queensdale)"],
    ["Golem Mark II\nWhitland Flats\n(Mount Maelstrom)"],
    ["Svanir Shaman\nFrusenfell Creek\n(Wayfarer Foothills)"],
    ["Claw of Jormag\nFrostwalk Tundra\n(Frostgorge Sound)"],
    ["Fire Elemental\nThaumanova Reactor\n(Metrica Province)"],
    ["Taidha Covington\nLaughing Gull Island\n(Bloodtide Coast)"],
    ["Megadestroyer\nMaelstrom's Bile\n(Mount Maelstrom)"],
    ["Tequatl the Sunless\nSplintered Coast\n(Sparkfly Fen)"],
    ["Triple Trouble\nFirth of Revanion\nBloodtide Coast"],
    ["Karka Queen\nDriftglass Springs or Southsun Shoals \n(Southsun Cove)"],
]

const durations = Array.from({ length: firstSpawns.length }, () => [15])

let hasTimeBetween = [
    [180],
    [120],
    [180],
    [120],
    [180],
    [120],
    [180],
    [120],
    [180],
    [180],
    [180, 240, 270, 270, 180, 300],
    [180, 240, 270, 270, 180, 300],
    [240, 270, 270, 180, 300, 180],
]

hasTimeBetween.forEach((_, i, arr) => {
    arr[i].forEach((__, j, arr1) => {
        arr1[j] -= 15
    })
})

export const createEvents = async () => {
    return eventCreator(firstSpawns, descriptions, durations, backPics, hasTimeBetween)
}