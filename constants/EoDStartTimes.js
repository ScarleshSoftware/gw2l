import eventCreator from '../helpers/eventCreator';
const moment = require('moment');

const firstSpawns = [
    moment.duration({
        hours: 1,
        minutes: 30,
    }),
    moment.duration({
        hours: 0,
    }),
    moment.duration({
        minutes: 30,
    }),
    moment.duration({
        hours: 0,
    }),
]

const allTheMaps = [
    "Seitung Province", "New Kaineng City", "The Echovald Wilds", "Dragon's End"
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
    [30],
    [40],
    [35, 20],
    [60, 60],
]

const hasTimeBetween = [
    [90],
    [80],
    [35, 30],
    [0, 0],
]

const descriptions = [
    ["Aetherblade Assault"],
    ["Kaineng Blackout"],
    ["Gang War", "Aspenwood"],
    ["Preparations", "The Battle for the Jade Sea"],
]

export const createEvents = async () => {
    return eventCreator(firstSpawns, descriptions, durations, backPics, hasTimeBetween)
}