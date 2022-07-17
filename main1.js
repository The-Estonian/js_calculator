console.log("JS 2 Connected!");

const display = document.getElementById('display');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const equals = document.getElementById('equals');
const reset = document.getElementById('reset');


let lastOperator = ""
let leftNumber = ""
let calculationText = ""


one.addEventListener('click', (e) => {
    calculationText += "1"
    display.textContent = String(leftNumber) + lastOperator + calculationText
});

two.addEventListener('click', (e) => {
    calculationText += "2"
    display.textContent = String(leftNumber) + lastOperator + calculationText
});

three.addEventListener('click', (e) => {
    calculationText += "3"
    display.textContent = String(leftNumber) + lastOperator + calculationText
});

four.addEventListener('click', (e) => {
    calculationText += "4"
    display.textContent = String(leftNumber) + lastOperator + calculationText
});

five.addEventListener('click', (e) => {
    calculationText += "5"
    display.textContent = String(leftNumber) + lastOperator + calculationText
});

six.addEventListener('click', (e) => {
    calculationText += "6"
    display.textContent = String(leftNumber) + lastOperator + calculationText
});

seven.addEventListener('click', (e) => {
    calculationText += "7"
    display.textContent = String(leftNumber) + lastOperator + calculationText
});

eight.addEventListener('click', (e) => {
    calculationText += "8"
    display.textContent = String(leftNumber) + lastOperator + calculationText
});

nine.addEventListener('click', (e) => {
    calculationText += "9"
    display.textContent = String(leftNumber) + lastOperator + calculationText
});

zero.addEventListener('click', (e) => {
    calculationText += "0"
    display.textContent = String(leftNumber) + lastOperator + calculationText
});


reset.addEventListener('click', (e) => {
    display.textContent = "0"
    lastOperator = ""
    leftNumber = ""
    calculationText = ""
});

const displayContent = (operator, logic) => {
    if (logic === "equals") {
        leftNumber = parseInt(calculationText)
    } else if (logic === "addition"){
        leftNumber += parseInt(calculationText)
    } else if (logic === "subtraction"){
        leftNumber -= parseInt(calculationText)
    }  else if (logic === "divide"){
        leftNumber /= parseInt(calculationText)
    } else if (logic === "multiply"){
        leftNumber *= parseInt(calculationText)
    }
    lastOperator = operator
    calculationText = ""
    if (lastOperator === "") {
        calculationText = leftNumber
        leftNumber = ""
    }
    display.textContent = String(leftNumber) + lastOperator + calculationText
}

plus.addEventListener('click', (e) => {
    if (lastOperator === "") {
        displayContent("+", "equals")
    } else if (lastOperator === "+") {
        displayContent("+", "addition")
    } else if (lastOperator === "-") {
        displayContent("+", "subtraction")
    } else if (lastOperator === "/") {
        displayContent("+", "divide")
    } else if (lastOperator === "x") {
        displayContent("+", "multiply")
    }
});

minus.addEventListener('click', (e) => {
    if (lastOperator === "") {
        displayContent("-", "equals")
    } else if (lastOperator === "+") {
        displayContent("-", "addition")
    } else if (lastOperator === "-") {
        displayContent("-", "subtraction")
    } else if (lastOperator === "/") {
        displayContent("-", "divide")
    } else if (lastOperator === "x") {
        displayContent("-", "multiply")
    }
});

divide.addEventListener('click', (e) => {
    if (lastOperator === "") {
        displayContent("/", "equals")
    } else if (lastOperator === "+") {
        displayContent("/", "addition")
    } else if (lastOperator === "-") {
        displayContent("/", "subtraction")
    } else if (lastOperator === "/") {
        displayContent("/", "divide")
    } else if (lastOperator === "x") {
        displayContent("/", "multiply")
    }
});

multiply.addEventListener('click', (e) => {
    if (lastOperator === "") {
        displayContent("x", "equals")
    } else if (lastOperator === "+") {
        displayContent("x", "addition")
    } else if (lastOperator === "-") {
        displayContent("x", "subtraction")
    } else if (lastOperator === "/") {
        displayContent("x", "divide")
    } else if (lastOperator === "x") {
        displayContent("x", "multiply")
    }
});

equals.addEventListener('click', (e) => {
    if (lastOperator === "+") {
        displayContent("", "addition")
    } else if (lastOperator === "-") {
        displayContent("", "subtraction")
    } else if (lastOperator === "/") {
        displayContent("", "divide")
    } else if (lastOperator === "x") {
        displayContent("", "multiply")
    }
});
