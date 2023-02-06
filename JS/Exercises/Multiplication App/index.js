const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)
const questionEl = document.getElementById("quest")
const scoreEl = document.getElementById("score")
const inptEl = document.getElementById("inpt-txt")
const formEl = document.getElementById("form")
const correctAns = num1 * num2
let score = JSON.parse(localStorage.getItem("score"))

if(!score){
    score = 0
}

scoreEl.innerText = `Score: ${score}`
questionEl.innerText = `What is ${num1} multiply by ${num2}?`

formEl.addEventListener("submit", ()=>{
    const userAns = +inptEl.value
    if(userAns === correctAns){
        score++
        updateLocalSorage()
    } else {
        score = 0
        updateLocalSorage()
    }
})

function updateLocalSorage(){
    localStorage.setItem("score", JSON.stringify(score))
}