const hiddenEl = document.querySelectorAll(".hidden")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
    }) 
})

hiddenEl.forEach((el) => observer.observe(el))