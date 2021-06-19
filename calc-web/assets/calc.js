// First condition display
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};

// function display number
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

// function reset calc
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

// function input number to displayNumber
function inputDigit(digit) {
    calculator.displayNumber += digit;    
}

// function displayNumber to zero 0
function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan');
    }
}


function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }
 
    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber)
    } else if (calculator.operator === "-") {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    } else if (calculator.operator === "*") {
        result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber)
    } else if (calculator.operator === "/") {
        result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber)
    }

    calculator.displayNumber = result;
}

//
const buttons = document.querySelectorAll(".button");
for (let button of buttons)
    button.addEventListener('click', function(event) {
    // get click object
    const target = event.target;
// clear display
    if (target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
    }

    if (target.classList.contains('negative')) {
        inverseNumber();
        updateDisplay();
        return;
    }

    if (target.classList.contains('equals')) {
        performCalculation();
        updateDisplay();
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.innerText);
        return;
    }

    inputDigit(target.innerText);
    updateDisplay();
})