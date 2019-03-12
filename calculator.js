// Set global variables

var valuesToCalculate = [];
var storedTotal = 0;
var temp = "";
var decimalPoint = false;
//Check what buttons are clicked 

//Store button that is clicked in variable
function buttonClicked(buttonsValue) {
    checkWhatButtonIs(buttonsValue);
    displayScreen(temp);
}

    //Have a function that checks stored button variable against options then do them.

//If any numbers are clicked, store value as temporary string and dispay on screen
    //check if number with isNan() or decimal
        //If any other button rather than number, decimal or equals is clicked add temporary 
            //string to array then add the clicked symbol and clear temp
function checkWhatButtonIs(buttonsValue) {

    if (buttonsValue === 'clear') {
        allClear();
        return;
    }

    if (!isNaN(buttonsValue) || buttonsValue === '.') {
        if (buttonsValue === '.'  && decimalPoint === true) {
            return;
        } else if (buttonsValue === '.' && decimalPoint === false) {
            decimalPoint = true;
        }
        temp = temp + buttonsValue;
    } else if (buttonsValue == "=") {
        valuesToCalculate.push(parseFloat(temp));
        calculateAnswer();
        decimalPoint = false;
    } else {
        valuesToCalculate.push(parseFloat(temp));
        valuesToCalculate.push(buttonsValue);
        temp = "";
        decimalPoint = false;
    }
}

function startingNewOrContinue() {
    //checks to see if your starting a new calculation or continuing with old one
    if (isNaN(valuesToCalculate[0])) {
        valuesToCalculate[0] = storedTotal;
    }
}

function checkIfAnyNanValues() {
//checks to see if any values are 'NaN' then replaces them with 0
      for (i = 0; i < valuesToCalculate.length; i++) {
          if (valuesToCalculate[i] !== valuesToCalculate[i]) {
              valuesToCalculate[i] = 0;
          }
    }
}

//Calculate the result of array valuesToCalculate as string and then clear temp and valuesToCalculate
function calculateAnswer() {
    startingNewOrContinue();
    checkIfAnyNanValues();
    var answerTotal = eval(valuesToCalculate.join(' '));
    storedTotal = parseFloat(answerTotal);
    valuesToCalculate = [];
    temp = "";
    displayScreen(storedTotal);
}

//display the number inputs on the calculator screen
function displayScreen(value) {
    var onScreenText = value;
    if (onScreenText === '') {
        onScreenText = '0';
    } else {
    document.getElementById('display').innerHTML = onScreenText;
    }
}

//clear or reset all main variables
function allClear() { 
    temp = '';
    storedTotal = 0;
    valuesToCalculate = [];
    decimalPoint = false;
    displayScreen('0');
}
