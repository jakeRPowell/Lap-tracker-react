const sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0)
}

const calculateLapTimes = (runner, timeElapsed) => {
    let lapsSum = sum(runner.lapTimes)
    let newTime = timeElapsed.replace(/\./g,'')
    let newNewTime = newTime.replace(/:/g,'')
    let newLap = parseInt(newNewTime - lapsSum)
    
    return [...runner.lapTimes, newLap]
}

const calculateAverage = (lapTimes) => {
    let average
    if (lapTimes.length === 0) {
        average = lapTimes[0]
    } else {
        average = (lapTimes.reduce((a, b) => a + b, 0)/lapTimes.length)
    }
    
    return average
}

const formatMS = (ms) => {
    
    let milliseconds = parseInt((ms%10000)/100)
        , seconds = parseInt((ms/1000)%60)
        , minutes = parseInt((ms/(1000*60))%60)
        , hours = parseInt((ms/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    
}

const lapTimesSum = (newLapTimes) => {
    return sum(newLapTimes)
}

const getLastLap = (newLapTimes) => {
    return newLapTimes[newLapTimes.length - 1]
}

export { calculateLapTimes, calculateAverage, formatMS, lapTimesSum, getLastLap }