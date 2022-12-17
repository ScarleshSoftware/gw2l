import eventCreator from '../helpers/eventCreator';
const moment = require('moment');
const firstSpawns = [
    moment.duration({
        hours: 0,
        minutes: 45,
    }),
    moment.duration({
        hours: 1,
        minutes: 30,
    }),
    moment.duration({
        hours: 0,
    }),
    moment.duration({
        minutes: 10,
    }),
    moment.duration({
        minutes: 25,
    }),
]

const allTheMaps = [
    "Auric Basin", "Dragon's Stand", "Dry Top",
    "Verdant Brink", "Tangled Depths"];

const backPics = [
    require('../assets/ab.png'),
    require('../assets/ds.png'),
    require('../assets/td.png'),
    require('../assets/vb.png'),
    require('../assets/dt.png'),
]

const descriptions = [
    ["Challenges", "Octovines", "Reset", "Pylons"],
    ["Start advancing on the Blighting Towers"],
    ["Crash Site", "Sandstorm"],
    ["Night Bosses", "Daytime", "Night"],
    ["Against the Chak Gerent", "Chak Gerent", "Help the Outposts"],
];

const durations = [
    [15, 20, 10, 75],
    [120],
    [40, 20],
    [20, 75, 25],
    [5, 20, 95],
];

const hasSubEvents = [
    [false, false, false, false],
    [false],
    [false, false],
    [false, false, false],
    [false, false, false],
];

const hasTimeBetween = Array.from({ length: firstSpawns.length }, () => [0])

export const createEvents = async () => {
    return eventCreator(firstSpawns, descriptions, durations, backPics, hasTimeBetween, hasSubEvents)
}