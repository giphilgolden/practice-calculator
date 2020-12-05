let First = document.querySelector("#first")
let Second = document.querySelector("#second")
let Equals = document.querySelector("#equals")
let Add = document.querySelector("#Add")
let Subtract = document.querySelector("#Subtract")
let Multiply = document.querySelector("#Multiply")
let Divide = document.querySelector("#Divide")

Add.addEventListener("click", function() {
Equals.innerHTML = (First.value + " plus " + Second.value + " equals " + (Number(First.value) + Number(Second.value)))
})

Subtract.addEventListener("click", function() {
Equals.innerHTML = (First.value + " subtracted by " + Second.value + " equals " + (First.value - Second.value))    
})

Multiply.addEventListener("click", function() {
    Equals.innerHTML = (First.value + " times " + Second.value + " equals " + (First.value * Second.value))
})

Divide.addEventListener("click", function() {
    Equals.innerHTML = (First.value + " divided by " + Second.value + " equals " + (First.value / Second.value))
})