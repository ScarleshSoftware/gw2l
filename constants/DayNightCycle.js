import eventCreator from '../helpers/eventCreator';
const moment = require('moment');

const firstSpawns = [
    moment.duration({
        minutes: 25,
    }),
]

const backPics = [
    require('../assets/dusksky.png'),
    require('../assets/daysky.jpg'),
    require('../assets/dusksky.png'),
    require('../assets/nightsky.png'),
]

const durations = [
    [5, 70, 5, 40],
]

const hasTimeBetween = Array.from({ length: firstSpawns.length }, () => [0])

const hasSubEvents = Array.from({ length: firstSpawns.length }, () => [false])

const descriptions = [
    ["Dawn", "Day", "Dusk", "Night"],
]

export const getCurrentEvent = async () => {
    return eventCreator(firstSpawns, descriptions, durations, backPics, hasTimeBetween, hasSubEvents)
}