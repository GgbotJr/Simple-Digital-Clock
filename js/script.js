const $ = document

const hoursElem = $.getElementById("hour")
const minutesElem = $.getElementById("minute")
const secondsElem = $.getElementById("seconds")

function timer () {

    let allTime = new Date()

    let hour = allTime.getHours()
    let minute = allTime.getMinutes()
    let second = allTime.getSeconds()

    if (hour < 10) 
        hoursElem.innerHTML = "0" + hour
        else
        hoursElem.innerHTML = hour

    if (minute < 10) 
        minutesElem.innerHTML = "0" + minute
        else 
        minutesElem.innerHTML = minute

    if (second < 10) 
        secondsElem.innerHTML = "0" + second
        else 
        secondsElem.innerHTML = second

}

setInterval(timer, 1000)