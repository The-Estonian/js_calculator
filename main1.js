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


let calculation = 0
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


const addNumbers = (leftNumber, rightNumber) => {
    return leftNumber + rightNumber
}

const subtractNumbers = (leftNumber, rightNumber) => {
    return leftNumber - rightNumber
}

const divideNumbers = (leftNumber, rightNumber) => {
    return leftNumber / rightNumber
}

const multiplyNumbers = (leftNumber, rightNumber) => {
    return leftNumber * rightNumber
}

const calcDisplay = (leftSide=0, operator="", rightSide="") => {
    calculationText += rightSide
    display.textContent = String(leftSide) + operator + calculationText
}

reset.addEventListener('click', (e) => {
    display.textContent = "0"
    lastOperator = ""
    leftNumber = ""
    calculationText = ""
});

plus.addEventListener('click', (e) => {
    if (lastOperator === "") {
        leftNumber = parseInt(calculationText)
        lastOperator = "+"
        calculationText = ""
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "+") {
        leftNumber += parseInt(calculationText)
        calculationText = ""
        lastOperator = "+"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "-") {
        leftNumber -= parseInt(calculationText)
        calculationText = ""
        lastOperator = "+"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "/") {
        leftNumber /= parseInt(calculationText)
        calculationText = ""
        lastOperator = "+"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "x") {
        leftNumber *= parseInt(calculationText)
        calculationText = ""
        lastOperator = "+"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    }
});

minus.addEventListener('click', (e) => {
    if (lastOperator === "") {
        leftNumber = parseInt(calculationText)
        lastOperator = "-"
        calculationText = ""
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "+") {
        leftNumber += parseInt(calculationText)
        calculationText = ""
        lastOperator = "-"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "-") {
        leftNumber -= parseInt(calculationText)
        calculationText = ""
        lastOperator = "-"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "/") {
        leftNumber /= parseInt(calculationText)
        calculationText = ""
        lastOperator = "-"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "x") {
        leftNumber *= parseInt(calculationText)
        calculationText = ""
        lastOperator = "-"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    }
});

divide.addEventListener('click', (e) => {
    if (lastOperator === "") {
        leftNumber = parseInt(calculationText)
        lastOperator = "/"
        calculationText = ""
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "+") {
        leftNumber += parseInt(calculationText)
        calculationText = ""
        lastOperator = "/"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "-") {
        leftNumber -= parseInt(calculationText)
        calculationText = ""
        lastOperator = "/"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "/") {
        leftNumber /= parseInt(calculationText)
        calculationText = ""
        lastOperator = "/"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "x") {
        leftNumber *= parseInt(calculationText)
        calculationText = ""
        lastOperator = "/"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    }
});

multiply.addEventListener('click', (e) => {
    if (lastOperator === "") {
        leftNumber = parseInt(calculationText)
        lastOperator = "x"
        calculationText = ""
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "+") {
        leftNumber += parseInt(calculationText)
        calculationText = ""
        lastOperator = "x"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "-") {
        leftNumber -= parseInt(calculationText)
        calculationText = ""
        lastOperator = "x"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "/") {
        leftNumber /= parseInt(calculationText)
        calculationText = ""
        lastOperator = "x"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "x") {
        leftNumber *= parseInt(calculationText)
        calculationText = ""
        lastOperator = "x"
        display.textContent = String(leftNumber) + lastOperator + calculationText
    }
});

equals.addEventListener('click', (e) => {
    if (lastOperator === "+") {
        leftNumber += parseInt(calculationText)
        lastOperator = ""
        calculationText = leftNumber
        leftNumber = ""
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "-") {
        leftNumber -= parseInt(calculationText)
        lastOperator = ""
        calculationText = leftNumber
        leftNumber = ""
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "/") {
        leftNumber /= parseInt(calculationText)
        lastOperator = ""
        calculationText = leftNumber
        leftNumber = ""
        display.textContent = String(leftNumber) + lastOperator + calculationText
    } else if (lastOperator === "x") {
        leftNumber *= parseInt(calculationText)
        lastOperator = ""
        calculationText = leftNumber
        leftNumber = ""
        display.textContent = String(leftNumber) + lastOperator + calculationText
    }
});