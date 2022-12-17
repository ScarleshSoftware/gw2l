import eventCreator from '../helpers/eventCreator';
const moment = require('moment');
const firstSpawns = [
    moment.duration({
        minutes: 10,
    }),
    moment.duration({
        hours: 0,
    }),
    moment.duration({
        hours: 1,
    }),
]

const allTheMaps = [
    "Grothmar Valley", "Bjora Marches", "Dragonstorm",
];

const backPics = [
    require('../assets/groth.png'),
    require('../assets/bjora.png'),
    require('../assets/drstorm.png'),
]

const descriptions = [
    ["Effigy", "Dolomore Shrine", "Ooze Pits", "Metal Concert"],
    ["Shards of Winter", "Storms of Winter\n(Champions)", "Drakkar", "Storms of Winter\n(Keep)"],
    ["Dragonstorm (Public)"],
];

const durations = [
    [15, 22, 20, 15],
    [5, 15, 35, 15],
    [20],
];

const hasSubEvents = [
    [false, false, false, false],
    [false, false, false, false],
    [false],
];

const hasTimeBetween = [
    [13, 5, 15, 15],
    [0, 45, 5, 0],
    [60],
];

export const createEvents = async () => {
    return eventCreator(firstSpawns, descriptions, durations, backPics, hasTimeBetween, hasSubEvents)
}