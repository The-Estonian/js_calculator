console.log("JS Connected!");

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

const defaultValue = 0
let calculation = defaultValue
let calculationModification
let calculationText = ""

one.addEventListener('click', (e) => {
    calculationText = calculationText + "1,"
    display.textContent = calculationText.replaceAll(",", "")
});

two.addEventListener('click', (e) => {
    calculationText = calculationText + "2,"
    display.textContent = calculationText.replaceAll(",", "")
});

three.addEventListener('click', (e) => {
    calculationText = calculationText + "3,"
    display.textContent = calculationText.replaceAll(",", "")
});

four.addEventListener('click', (e) => {
    calculationText = calculationText + "4,"
    display.textContent = calculationText.replaceAll(",", "")
});

five.addEventListener('click', (e) => {
    calculationText = calculationText + "5,"
    display.textContent = calculationText.replaceAll(",", "")
});

six.addEventListener('click', (e) => {
    calculationText = calculationText + "6,"
    display.textContent = calculationText.replaceAll(",", "")
});

seven.addEventListener('click', (e) => {
    calculationText = calculationText + "7,"
    display.textContent = calculationText.replaceAll(",", "")
});

eight.addEventListener('click', (e) => {
    calculationText = calculationText + "8,"
    display.textContent = calculationText.replaceAll(",", "")
});

nine.addEventListener('click', (e) => {
    calculationText = calculationText + "9,"
    display.textContent = calculationText.replaceAll(",", "")
});

zero.addEventListener('click', (e) => {
    calculationText = calculationText + "0,"
    display.textContent = calculationText.replaceAll(",", "")
});



plus.addEventListener('click', (e) => {
    calculationText = calculationText + "+,"
    display.textContent = calculationText.replaceAll(",", "")
});

minus.addEventListener('click', (e) => {
    calculationText = calculationText + "-,"
    display.textContent = calculationText.replaceAll(",", "")
});

divide.addEventListener('click', (e) => {
    calculationText = calculationText + "/,"
    display.textContent = calculationText.replaceAll(",", "")
});

multiply.addEventListener('click', (e) => {
    calculationText = calculationText + "x,"
    display.textContent = calculationText.replaceAll(",", "")
});

equals.addEventListener('click', (e) => {
    calculationText = calculationText.split(",")
    let numCollector = ""
    let lastOperator = ""
    for (let i = 0; i < calculationText.length; i++) {
        if (parseInt(calculationText[i])) {
            numCollector += calculationText[i]
        } else if (calculationText[i] === "+"){
            lastOperator = "+"
            if (calculation === 0) {
                calculation = parseInt(numCollector)
                numCollector = ""
            } else {
                calculation += parseInt(numCollector)
                numCollector = ""
            }
        } else if (calculationText[i] === "-"){
            lastOperator = "-"
            if (calculation === 0) {
                calculation = parseInt(numCollector)
                numCollector = ""
            } else {
                calculation -= parseInt(numCollector)
                numCollector = ""
            }
        } else if (calculationText[i] === "/"){
            lastOperator = "/"
            if (calculation === 0) {
                calculation = parseInt(numCollector)
                numCollector = ""
            } else {
                calculation /= parseInt(numCollector)
                numCollector = ""
            }
        } else if (calculationText[i] === "x"){
            lastOperator = "x"
            if (calculation === 0) {
                calculation = parseInt(numCollector)
                numCollector = ""
            } else {
                calculation *= parseInt(numCollector)
                numCollector = ""
            }
        }
        
    }
    if (lastOperator === "+") {
        calculation += parseInt(numCollector)
    } else if (lastOperator === "-"){
        calculation -= parseInt(numCollector)
    } else if (lastOperator === "/"){
        calculation /= parseInt(numCollector)
    } else if (lastOperator === "x"){
        calculation *= parseInt(numCollector)
    }
    display.textContent = calculation
    calculationText = String(calculation)+","
    calculation = 0
});

