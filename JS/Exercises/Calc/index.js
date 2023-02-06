const txtOp1 = document.getElementById("op1")
const txtOp = document.getElementById("op")
const txtOp2 = document.getElementById("op2")
const btnCalc = document.getElementById("calc")
const pResult = document.getElementById("result")

btnCalc.addEventListener("click", calculate)

function calculate() {
    const operator = txtOp.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operator == "+" || operator == "-" || operator == "*" || operator == "/") && !isNaN(op1) && !isNaN(op2)) {
        let fResult
        switch (operator) {
            case "+":
                fResult = op1 + op2
                break;
            case "-":
                fResult = op1 - op2
                break;
            case "*":
                fResult = op1 * op2
                break;
            case "/":
                fResult = op1 / op2
                break;
        }
        pResult.style = "color:white"
        pResult.innerText = (fResult)
    } else {
        pResult.style = "color:red"
        pResult.innerText = "Syntax Error"
    }

}

