
let timeBegan = null


const formattedTime = () => {

    if (timeBegan === null) {
        timeBegan = new Date();
    }
    
    let currentTime = new Date()
    , timeElapsed = new Date(currentTime - timeBegan)
    , hour = timeElapsed.getUTCHours()
    , min = timeElapsed.getUTCMinutes()
    , sec = timeElapsed.getUTCSeconds()
    , ms = timeElapsed.getUTCMilliseconds()

    , formattedTime = 
        (hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);

        return formattedTime
}

export default formattedTime