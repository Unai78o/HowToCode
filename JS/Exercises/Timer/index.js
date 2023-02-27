const playBtn = document.querySelector('.play')
const restartBtn = document.querySelector('.restart')
const timer = document.querySelector('.time')

let min = 0
let sec = 0
let hour = 0

let leadingMin = 0
let leadingSec = 0
let leadingHour = 0

let timerStatus = 'paused'
let timerInterval = null


function timerEl() {
    if (sec === 60) {
        min++
        sec = 00
    }

    if (min === 60) {
        hour++
        min = 00
    }
    
    if (sec < 10) {
        leadingSec = "0" + sec.toString()
    }else{
        leadingSec = sec
    }

    if (min < 10) {
        leadingMin = "0" + min.toString()
    }else{
        leadingMin = min
    }

    if (hour < 10) {
        leadingHour = "0" + hour.toString()
    }else{
        leadingHour = hour
    }


    timer.innerHTML = leadingHour + ":" + leadingMin + ":" + leadingSec
        sec++
}

playBtn.addEventListener('click', () => {
    if (timerStatus == 'paused') {
        timerInterval = setInterval(timerEl, 1000)
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
        playBtn.style.backgroundColor = 'rgb(196, 183, 0)'
        timerStatus = 'playing'
    }else{
        clearInterval(timerInterval)
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
        playBtn.style.backgroundColor = 'rgb(0, 151, 13)'
        timerStatus = 'paused'
    }
})

restartBtn.addEventListener('click', () => {
    sec = 0
    min = 0
    hour = 0
    clearInterval(timerInterval)
    timer.innerHTML = '00:00:00'
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    playBtn.style.backgroundColor = 'rgb(0, 151, 13)'
    timerStatus = 'paused'
})
