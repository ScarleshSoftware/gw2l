const moment = require('moment');

const tomorrow = moment().add(1, "d").startOf('day').unix();

export default (firstSpawns, descriptions, durations, backPics, hasTimeBetween) => {
    const listEvents = []
    for (const i in firstSpawns) {
        var currentTime = moment().startOf('day').add(firstSpawns[i]).unix(0)
        if (moment().unix() <= currentTime)
            listEvents.push({
                fullTime: currentTime,
                time: moment.unix(currentTime).format("HH:mm"),
                title: descriptions[i][0],
                background: backPics[i]
            })

        // Check if this one is the current event active, by checking if the next
        // one starts soon
        let incomingDelta = (durations[i][1 % durations[i].length] * 60) + (hasTimeBetween[i][1 % hasTimeBetween[i].length] * 60)
        if (currentTime + incomingDelta > moment().unix()) {
            listEvents.push({
                fullTime: currentTime,
                time: moment.unix(currentTime).format("HH:mm"),
                title: descriptions[i][0],
                background: backPics[i],
                currentlyActive: true
            })
        }
        currentTime += (durations[i][0] * 60) + (hasTimeBetween[i][0] * 60)
        let j = 1;
        while (tomorrow >= currentTime) {
            if (moment().unix() <= currentTime)
                listEvents.push({
                    key: `${i}${j}`,
                    fullTime: currentTime,
                    time: moment.unix(currentTime).format("HH:mm"),
                    title: descriptions[i][j % descriptions[i].length],
                    background: backPics[i]
                })
            incomingDelta = (durations[i][1 % durations[i].length] * 60) + (hasTimeBetween[i][1 % hasTimeBetween[i].length] * 60)
            if (currentTime <= moment().unix() && currentTime + (durations[i][(j + 1) % durations[i].length] * 60) > moment().unix()) {
                listEvents.push({
                    fullTime: currentTime,
                    time: moment.unix(currentTime).format("HH:mm"),
                    title: descriptions[i][0],
                    background: backPics[i],
                    currentlyActive: true
                })
            }
            currentTime += incomingDelta
            j++;
        }
    }
    //Sort the list
    return listEvents.sort((l1, l2) => l1.fullTime - l2.fullTime)
}