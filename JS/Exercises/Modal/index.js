const showBtn = document.querySelector("#open-button")
const modalCont = document.querySelector("#modal-container")
const closeBtn = document.querySelector("#close-btn")

showBtn.addEventListener('click', () => {
    modalCont.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modalCont.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if (e.target == modalCont) {
        modalCont.style.display = 'none'
    }
})