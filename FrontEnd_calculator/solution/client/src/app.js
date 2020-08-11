// String to hold the current input value for display in the total
let currentInputString = "";
// String to hold all chars entered, used for final calculation
let calcString = "";

// Get DOM elements
const headerDisplay = document.getElementById('input_display');
const totalDisplay = document.getElementById('total_display');
const clearButton = document.getElementById('clear_button');
const equalsButton = document.getElementById('equals_button');
const saveButton = document.getElementById('save_button');

const numericButtons = Array.prototype.slice.call(document.querySelectorAll('.button__numeric'));
const operatorButtons = Array.prototype.slice.call(document.querySelectorAll('.button__operator'));

// Numeric button click logic
numericButtons.map(numBtn => {
    numBtn.addEventListener('click', function () {
        // Reset total display text
        totalDisplay.innerText = "";
        // Get value of input button
        const btnAttr = this.dataset.input;

        // If the first digit is a decimal place, add a leading zero
        if (btnAttr === "." && currentInputString.length === 0) {
            currentInputString += "0.";
            calcString += "0.";
        }

        // If there is already a decimal place, ignore second input of it
        if ((btnAttr === "." && currentInputString.indexOf(".") != -1) || currentInputString.length >= 7) {
            totalDisplay.innerText = currentInputString;
            return;
        }

        // Add input value to current input value
        currentInputString += btnAttr;
        calcString += btnAttr;
        // Set total display to show current input
        totalDisplay.innerText = currentInputString;
    })
});

// Operator button logic
operatorButtons.map(opBtn => {
    opBtn.addEventListener('click', function () {
        // Get operator value from HTML
        const operator = this.dataset.operator;

        const lastElement = calcString[calcString.length - 1];

        // Reset input string
        currentInputString = "";

        // If no numeric inputs yet, add zero to calculation
        if (calcString.length === 0) {
            calcString += 0;
        }

        // If the last button click was an operator, remove it
        if (checkForOperator(lastElement)) {
            calcString = calcString.slice(0, -1);
        }

        // Add operator to calculation string and display in the header
        calcString += operator;
        displayHeader(calcString);

        // Reset total display
        totalDisplay.innerText = "0";
    });
});

// Equals button logic
equalsButton.addEventListener('click', function () {
    const lastElement = calcString[calcString.length - 1];

    // If the last button click was an operator, remove it
    if (checkForOperator(lastElement)) {
        calcString = calcString.slice(0, -1);
    }

    // Evaluate calcString to get a result
    const result = eval(calcString);

    // Format calcString to add spaces and "="
    const formattedString = formatString(calcString)
    displayHeader(formattedString + " =");

    totalDisplay.innerText = result;

    clearCalcData();
});

// Save button logic
saveButton.addEventListener('click', function () {
    // Don't fire if no calculations have been done
    if (calcString.length === 0) {
        return;
    }

    const url = 'http://localhost:8080/storeData.php?calc=' + calcString;
    callPhp(url, { calc: calcString });
    window.location.href = 'http://localhost:8080/calculations.php';
});

function callPhp(url, data) {
    console.log(data);
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.status == 404) {
            console.log("didn't load");
        }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send(data);
}

// AC button logic
clearButton.addEventListener('click', function () {
    clearDisplay();
});

function formatString(str) {
    return str.split(/(\*|\/|\-|\+)/gi).join(" ");
}

function displayHeader(str) {
    const formattedString = formatString(str);
    headerDisplay.innerText = formattedString.split(/(\*|\/|\-|\+)/gi).join(" ").replace(/\*/gi, '×').replace(/\//gi, '÷');
}

function checkForOperator(str) {
    return /(\*|\/|\-|\+)/gi.test(str);
}

function clearCalcData() {
    currentInputString = "";
    calcString = "";
}

function clearDisplay() {
    clearCalcData();
    headerDisplay.innerText = "";
    totalDisplay.innerText = "0";
}