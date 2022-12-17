import eventCreator from '../helpers/eventCreator';
const moment = require('moment');

const firstSpawns = [
    moment.duration({
        minutes: 5,
    }),
    moment.duration({
        hours: 1,
    }),
    moment.duration({
        hours: 1,
        minutes: 30,
    }),
    moment.duration({
        minutes: 30,
    }),
    moment.duration({
        hours: 0,
    }),
    moment.duration({
        hours: 1,
        minutes: 45,
    }),
    moment.duration({
        minutes: 45,
    }),
    moment.duration({
        hours: 1,
    }),
]

const allTheMaps = [
    "Crystal Oasis", "Desert Highlands", "Elon Riverlands", "Desolation", 
    "Domain of Vabbi", "Domain of Istan", "Thunderhead Keep", "Jahai Bluffs"
]

const backPics = [
    require('../assets/choya.png'),
    require('../assets/highlands.png'),
    require('../assets/riverlands.png'),
    require('../assets/desolation.png'),
    require('../assets/zealots.png'),
    require('../assets/palawadan.png'),
    require('../assets/north_thund.png'),
    require('../assets/branded_shatty.png'),
]

const durations = [
    [15, 10],
    [20],
    [25, 20],
    [20, 20, 20],
    [30, 30, 30],
    [30],
    [15, 15],
    [15, 15],
]

const hasSubEvents = [
    [false, false],
    [false],
    [false, false],
    [false, false, false],
    [false, false, false],
    [false],
    [false, false],
    [false, false],
]

const hasTimeBetween = [
    [0, 95],
    [100],
    [0, 75],
    [10, 10, 40],
    [0, 0, 30],
    [90],
    [45, 45],
    [0, 90],
]

const descriptions = [
    ["Casino Coins", "Choya Pinata"],
    ["Buried Treasure"],
    ["Augury Rock", "Doppelganger"],
    ["Jundu Rising", "Maws of Torment", "Jundu Rising"],
    ["Forged with Fire", "Serpent's Ire", "Forged with Fire"],
    ["Palawadan"],
    ["The Oil Floes", "Thunderhead Keep"],
    ["Escort", "Death-Branded Shatterer"],
]

export const createEvents = async () => {
    return eventCreator(firstSpawns, descriptions, durations, backPics, hasTimeBetween, hasSubEvents)
}