const mainContainer = document.querySelector(".main-container")
const taskInput = document.querySelector(".task-input")
const addBtn = document.querySelector(".add-btn")


addBtn.addEventListener('click', () => {
    const tasksContainer = document.createElement("div")
    tasksContainer.classList.add("tasks-container")

    const taskContainer = document.createElement("div")
    taskContainer.classList.add("task-container")
    tasksContainer.appendChild(taskContainer)

    const taskText = document.createElement("p")
    taskText.classList.add("task-text")
    taskText.style.textDecoration = "none"
    taskContainer.appendChild(taskText)

    const taskBtns = document.createElement("div")
    taskBtns.classList.add("buttons")
    taskContainer.appendChild(taskBtns)

    const checkBtn = document.createElement("button")
    checkBtn.classList.add("check-btn")
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    taskBtns.appendChild(checkBtn)

    const delBtn = document.createElement("button")
    delBtn.classList.add("del-btn")
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    taskBtns.appendChild(delBtn)

    if (taskInput.value !== ""){
        taskText.innerHTML = taskInput.value
        mainContainer.appendChild(tasksContainer)
    }

    checkBtn.addEventListener('click', () => {
        if (taskText.style.textDecoration == "none"){
            taskText.style.textDecoration = "line-through"
        }else{
            taskText.style.textDecoration = "none"
        }
    })

    delBtn.addEventListener('click', (e) => {
        let target = e.target
        target.parentElement.parentElement.parentElement.remove()
    })
})
