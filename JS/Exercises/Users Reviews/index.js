function script()  {
    const customerImage = document.querySelector("#customer-img")
    const customerName = document.querySelector("#customer-name")
    const customerText = document.querySelector("#customer-text")

    const btn = document.querySelectorAll(".btn")
    let index = 0
    const customers = []

    function customerData(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `/JS/img/User Reviews/${img}.jpg`
        let customer = new customerData(Img, name, text)
        customers.push(customer)
    }

    createCustomer(0, "John", "Lorem, ipsum dolor sit amet consectetur adipisicing elit Reiciendis maxime delectus rem maiores corrupti quas porro ut. Expedita quam veritatiseligendi ullam voluptate, quis velit id. Quod, laudantium. Quisquam, cupiditate!")
    createCustomer(1, "Annie", "Lorem, ipsum dolor sit amet consectetur adipisicing elit Reiciendis maxime delectus rem maiores corrupti quas porro ut. Expedita quam veritatiseligendi ullam voluptate, quis velit id. Quod, laudantium. Quisquam, cupiditate!")
    createCustomer(2, "Elise", "Lorem, ipsum dolor sit amet consectetur adipisicing elit Reiciendis maxime delectus rem maiores corrupti quas porro ut. Expedita quam veritatiseligendi ullam voluptate, quis velit id. Quod, laudantium. Quisquam, cupiditate!")
    createCustomer(3, "Andre", "Lorem, ipsum dolor sit amet consectetur adipisicing elit Reiciendis maxime delectus rem maiores corrupti quas porro ut. Expedita quam veritatiseligendi ullam voluptate, quis velit id. Quod, laudantium. Quisquam, cupiditate!")
    createCustomer(4, "Michael", "Lorem, ipsum dolor sit amet consectetur adipisicing elit Reiciendis maxime delectus rem maiores corrupti quas porro ut. Expedita quam veritatiseligendi ullam voluptate, quis velit id. Quod, laudantium. Quisquam, cupiditate!")

    btn.forEach(function(button){
        button.addEventListener("click", function(e){
            if (e.target.parentElement.classList.contains("preBtn")) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
            if (e.target.parentElement.classList.contains("nxtBtn")) {
                index++
                if (index === customers.length) {
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
}

script()