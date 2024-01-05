import eventCreator from '../helpers/eventCreator';
import dst_delta from './IsDST';
const moment = require('moment');

const firstSpawns = [
    moment.duration({
        hours: 1 + dst_delta,
    }),
    moment.duration({
        hours: 1 + dst_delta,
    }),
    moment.duration({
        hours: dst_delta,
    }),
    moment.duration({
        hours: 1 + dst_delta,
        minutes: 30
    }),
]

const allTheMaps = [
    "Skywatch Archipelago", "Wizard's Tower", "Amnytas", "Convergences"
]

const backPics = [
    require('../assets/skywatch.png'),
    require('../assets/wizardstower.png'),
    require('../assets/amnytas.png'),
    require('../assets/convergences.png'),
]

const descriptions = [
    ["Unlocking the Wizard's Tower"],
    ["Target Practice", "Target Practice & Fly by Night", "Fly by Night"],
    ["Defense of Anmytas"],
    ["Convergences (Public)"],
]

const durations = [
    [25],
    [40, 15, 20],
    [25],
    [10],
]

const hasTimeBetween = [
    [95],
    [0, 0, 45],
    [95],
    [170],
]

const hasSubEvents = [
    [false],
    [false, false],
    [false],
    [false],
]

export const createEvents = async () => {
    return eventCreator(firstSpawns, descriptions, durations, backPics, hasTimeBetween, hasSubEvents)
}
