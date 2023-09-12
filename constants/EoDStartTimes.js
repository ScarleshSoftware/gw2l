import eventCreator from '../helpers/eventCreator';
import dst_delta from './IsDST';
const moment = require('moment');

const firstSpawns = [
    moment.duration({
        hours: 1+ dst_delta,
        minutes: 30,
    }),
    moment.duration({
        hours: dst_delta,
    }),
    moment.duration({
        hours: dst_delta,
        minutes: 30,
    }),
    moment.duration({
        hours: dst_delta,
    }),
]

const allTheMaps = [
    "Seitung Province", "New Kaineng City", "The Echovald Wilds", "Dragon's End"
]

const preparationSubEvent = {
    "durations": [8, 8],
    "descriptions": ["Jade Maw", "Jade Maw"],
    "hasTimeBetween": [32, 7],
    "startDelta": 5
}

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

const hasSubEvents = [
    [false],
    [false],
    [false, false],
    [preparationSubEvent, false],
]

const descriptions = [
    ["Aetherblade Assault"],
    ["Kaineng Blackout"],
    ["Gang War", "Aspenwood"],
    ["Preparations", "The Battle for the Jade Sea"],
]

export const createEvents = async () => {
    return eventCreator(firstSpawns, descriptions, durations, backPics, hasTimeBetween, hasSubEvents)
}
