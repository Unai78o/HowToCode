const hourEl = document.getElementById("h")
const minEl = document.getElementById("min")
const secEl = document.getElementById("sec")
const ampmEl = document.getElementById("ampm")

function updateClock (){
    // let h = new Date().getHours()
    // let m = new Date().getMinutes()
    // let s = new Date().getSeconds()
    let date = new Date()
    let options = {
        hour: '2-digit',
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    }
    let amPm = date.toLocaleString("es-ES", options).split(" ")[1]
    let h = date.getHours("es-ES", options)
    let m = date.getMinutes("es-ES", options)
    let s = date.getSeconds("es-ES", options)

    console.log(amPm)

    if(h > 12){
        h -= 12
    }

    h = h<10 ? "0" + h : h
    m = m<10 ? "0" + m : m
    s = s<10 ? "0" + s : s

    hourEl.innerText = h
    minEl.innerText = m
    secEl.innerText = s
    ampmEl.innerText = amPm
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock();