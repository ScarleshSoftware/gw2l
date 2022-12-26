/***
 * This file will setup/handle the structure of dailies that
 * are not provided by the GW API.
 * LWS3, 4, IBS, Strikes and EoD are not in the API but they rotate around.
 * 
 * This will be consider the rotation starting today, 01/01/2023
 * I wish I could use a more reliable way, like the day of the year,
 * but leap-year and the fact that not all categories have a number
 * of elements that are dividends of the # of days in a year.
 *  */

const lws3 = [
    "Daily Bloodstone Fen",
    "Daily Ember Bay",
 	"Daily Bitterfrost Frontier",
 	"Daily Lake Doric",
 	"Daily Draconis Mons",
 	"Daily Siren's Landing"
]

const lws4 = [
    "Daily Domain of Istan",
    "Daily Sandswept Isles",
    "Daily Domain of Kourna",
    "Daily Jahai Bluffs",
    "Daily Thunderhead Peaks",
    "Daily Dragonfall"
]

const ibs = [
    "Daily Grothmar Valley",
    "Daily Bjora Marches",
    "Daily Drizzlewood Coast",
    "Daily Champions"
]

const strikeIbs = [
    "Cold War",
 	"Fraenir of Jormag",
 	"Shiverpeaks Pass",
 	"Voice of the Fallen and Claw of the Fallen",
 	"Whisper of Jormag",
    "Boneskinner"
]

const strikeEod = [
    "Aetherblade Hideout",
    "Xunlai Jade Junkyard",
    "Kaineng Overlook",
    "Harvest Temple",
    "Old Lion's Court"
]

const eodSlayer = [
    "Daily Seitung Province Purist Slayer",
    "Daily New Kaineng Naga Slayer",
    "Daily Echovald Wilds Void Slayer",
    "Daily Dragon's End Naga Slayer",
    "Daily Seitung Province Unchained Slayer",
    "Daily New Kaineng Jade Brotherhood Slayer",
    "Daily Echovald Wilds Jade Mech Slayer",
    "Daily Seitung Province 'Blade Slayer",
    "Daily New Kaineng Purist Slayer",
    "Daily Echovald Wilds Jade Brotherhood Slayer",
    "Daily Seitung Province Naga Slayer",
    "Daily New Kaineng Unchained Slayer",
    "Daily Echovald Wilds Spirit Slayer"
]

const eodEvent = [
    "Daily Seitung Province Event Completer",
    "Daily New Kaineng City Taskmaster",
    "Daily Dragon's End Event Completer",
    "Daily New Kaineng City Event Completer",
    "Daily Seitung Province Taskmaster",
    "Daily Echovald Wilds Event Completer",
    "Daily Dragon's End Event Completer",
    "Daily Seitung Province Event Completer",
    "Daily Echovald Wilds Taskmaster",
    "Daily New Kaineng City Event Completer",
    "Daily Echovald Wilds Event Completer"
]

const eodFishing = [
    "Daily Shiverpeaks Fisher",
    "Daily Desert Fisher",
    "Daily End of Dragons Fisher",
    "Daily Heart of Maguuma Fisher",
    "Daily Ascalon Fisher",
    "Daily Orr Fisher",
    "Daily Kryta Fisher",
    "Daily Maguuma Jungle Fisher"
]

const eodVistaGatherer = [
    "Daily End of Dragons Vista Viewer",
    "Daily End of Dragons Forager",
    "Daily End of Dragons Vista Viewer",
    "Daily End of Dragons Miner",
    "Daily End of Dragons Vista Viewer",
    "Daily End of Dragons Lumberer"
]

const moment = require('moment');
export default getCurrentDaily = (delta = 0) => {
    let dayIndex = moment().diff(moment([2022, 12, 26]), 'days')
    dayIndex = (dayIndex ? dayIndex : 0) + delta
    return [
        {name: lws3[dayIndex % lws3.length]},
        {name: lws4[dayIndex % lws4.length]},
        {name: ibs[dayIndex % ibs.length]},
        {name: strikeIbs[dayIndex % strikeIbs.length]},
        {name: strikeEod[dayIndex % strikeEod.length]},
        {name: eodSlayer[dayIndex % eodSlayer.length]},
        {name: eodEvent[dayIndex % eodEvent.length]},
        {name: eodFishing[dayIndex % eodFishing.length]},
        {name: eodVistaGatherer[dayIndex % eodVistaGatherer.length]},
    ]    
}
