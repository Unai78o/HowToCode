const contentEl = document.getElementsByClassName("content-container")
const question = document.getElementsByClassName("question")

for (let i = 0; i < contentEl.length; i++) {
    contentEl[i].addEventListener('click', () => {
        contentEl[i].classList.toggle('active')
    })
}