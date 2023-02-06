// // This is a JS comment
// var myVariable = 24;
// const myConstant = 3;

// // console.log("My age is " + myVariable);

// myVariable = 12;

// // console.log("My age is now " + myVariable);

// // console.log(myConstant);

// var op1 = 2
// var op2 = 3
// var result = op1 + op2;
// console.log("Result equals " + result)

// // Conditionals
// let myNumber = -6

// if(myNumber > 0){
//     console.log("My number is positive")
// } else if (myNumber === 0){
//     console.log("My number is 0")
// } else {
//     console.log("My number is negative")
// }

// Loops
// let i = 0
// while(i <= 10){
//     console.log(i)
//     i = i + 1
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

function salute(name, age) {
    console.log("Hi guys. My name is " + name)
    console.log("My age is " + age)
}

salute("Ucode", 24)

function multiply(num1, num2){
    let result = num1 * num2
    return result
}

console.log(multiply(2, 5))

// Arrays 
let myArray = ["David", "Sam", "Hector", "Carla"]
for(let i = 0; i < 4; i++){
    let show = myArray[i]
    console.log(show)
}

// Objects
let worker = {
    name: "Dave",
    age: 23,
    male: true
}


let worker2 = {
    name: "Rick",
    age: 32,
    male: false
}

let objectArray = [worker, worker2]

