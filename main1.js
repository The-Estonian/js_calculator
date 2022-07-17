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

const defaultValue = 0
let calculation = defaultValue
let lastOperator = ""
let calculationText = ""
let calculationContainer = 0

one.addEventListener('click', (e) => {
    display.textContent = calculationText += "1"
});

two.addEventListener('click', (e) => {
    display.textContent = calculationText += "2"
});

three.addEventListener('click', (e) => {
    display.textContent = calculationText += "3"
});

four.addEventListener('click', (e) => {
    display.textContent = calculationText += "4"
});

five.addEventListener('click', (e) => {
    display.textContent = calculationText += "5"
});

six.addEventListener('click', (e) => {
    display.textContent = calculationText += "6"
});

seven.addEventListener('click', (e) => {
    display.textContent = calculationText += "7"
});

eight.addEventListener('click', (e) => {
    display.textContent = calculationText += "8"
});

nine.addEventListener('click', (e) => {
    display.textContent = calculationText += "9"
});

zero.addEventListener('click', (e) => {
    display.textContent = calculationText += "0"
});



plus.addEventListener('click', (e) => {
    if (isNaN(calculationText[calculationText.length - 1])) {
        calculationText = calculationText.slice(0, -1)
        display.textContent = calculationText += "+"
    } else {
        display.textContent = calculationText += "+"
    }
    if (lastOperator === "") {
        lastOperator = "+"
        calculation = parseInt(calculationText)
    } else {
        if (lastOperator === "+") {
            calculation += parseInt(calculationText)
            display.textContent = (calculation).toString()
        } else if (lastOperator === "-") {
            calculation -= parseInt(calculationText)
            display.textContent = (calculation).toString()
        } else if (lastOperator === "/") {
            calculation /= parseInt(calculationText)
            display.textContent = (calculation).toString()
        } else if (lastOperator === "x") {
            calculation *= parseInt(calculationText)
            display.textContent = (calculation).toString()
        }
    }
});

minus.addEventListener('click', (e) => {
    if (isNaN(calculationText[calculationText.length - 1])) {
        calculationText = calculationText.slice(0, -1)
        display.textContent = calculationText += "-"
    } else {
        display.textContent = calculationText += "-"
    }
    if (lastOperator === "") {
        lastOperator = "-"
        calculation = parseInt(calculationText)
    } else {
        if (lastOperator === "+") {
            calculation += parseInt(calculationText)
            display.textContent = (calculation).toString()
        } else if (lastOperator === "-") {
            calculation -= parseInt(calculationText)
            display.textContent = (calculation).toString()
        } else if (lastOperator === "/") {
            calculation /= parseInt(calculationText)
            display.textContent = (calculation).toString()
        } else if (lastOperator === "x") {
            calculation *= parseInt(calculationText)
            display.textContent = (calculation).toString()
        }
    }
});

divide.addEventListener('click', (e) => {
    if (isNaN(calculationText[calculationText.length - 1])) {
        calculationText = calculationText.slice(0, -1)
        display.textContent = calculationText += "/"
    } else {
        display.textContent = calculationText += "/"
    }
    // if (lastOperator === "") {
    //     lastOperator = "/"
    //     calculationContainer = parseInt(calculationText)
    //     calculation = calculationContainer
    //     calculationContainer = 0
    // } else {
    //     calculation /= parseInt(calculationText)
    //     display.textContent = String(calculation)
    // }
});

multiply.addEventListener('click', (e) => {
    if (isNaN(calculationText[calculationText.length - 1])) {
        calculationText = calculationText.slice(0, -1)
        display.textContent = calculationText += "x"
    } else {
        display.textContent = calculationText += "x"
    }
    console.log(lastOperator);
    // if (lastOperator === "") {
    //     lastOperator = "x"
    //     calculationContainer = parseInt(calculationText)
    //     calculation = calculationContainer
    //     calculationContainer = 0
    // } else {
    //     calculation *= parseInt(calculationText)
    //     display.textContent = String(calculation)
    // }
});

equals.addEventListener('click', (e) => {
    console.log(calculationText);
    if (lastOperator === "+") {
        display.textContent = calculation += parseInt(calculationText)
    } else if (lastOperator === "-") {
        display.textContent = calculation -= parseInt(calculationText)
    } else if (lastOperator === "/") {
        display.textContent = calculation /= parseInt(calculationText)
    } else if (lastOperator === "x") {
        // console.log(calculation);
        // console.log(parseInt(calculationText));
        display.textContent = calculation *= parseInt(calculationText)
    }
});

reset.addEventListener('click', (e) => {
    lastOperator = ""
    display.textContent = "0"
    calculation = 0
    calculationText = ""
});
