// Set global variables

var valuesToCalculate = [];
var storedTotal = 0;
var temp = "";

//Check what buttons are clicked 

//Store button that is clicked in variable
function buttonClicked(buttonsValue) {
    console.log("Button Clicked: " + buttonsValue);
    console.log("Stored temp: " + temp);
    checkWhatButtonIs(buttonsValue);
    displayScreen(temp);
}

    //Have a function that checks stored button variable against options then do them.

//If any numbers are clicked, store value as temporary string and dispay on screen
    //check if number with isNan() or decimal
        //If any other button rather than number, decimal or equals is clicked add temporary 
            //string to array then add the clicked symbol and clear temp
function checkWhatButtonIs(buttonsValue) {

    if (!isNaN(buttonsValue) || buttonsValue === '.') {
        temp = temp + buttonsValue;
    } else if (buttonsValue == "=") {
        valuesToCalculate.push(parseFloat(temp));
        calculateAnswer();
    } else {
        valuesToCalculate.push(parseFloat(temp));
        valuesToCalculate.push(buttonsValue);
        temp = "";
    }
}


//Calculate the result of array valuesToCalculate as string and then clear temp and valuesToCalculate
function calculateAnswer() {
    //checks to see if your starting a new calculation or continuing with old one
    console.log("Stored ValuesToCalculate : " + valuesToCalculate);
    if (isNaN(valuesToCalculate[0])) {
        valuesToCalculate[0] = storedTotal;
    }
    //checks to see if any values are 'NaN' then replaces them with 0
     for (i = 0; i < valuesToCalculate.length; i++) {
         if (valuesToCalculate[i] !== valuesToCalculate[i]) {
             valuesToCalculate[i] = 0;
         }
    }
    console.log(valuesToCalculate);
    var answerTotal = eval(valuesToCalculate.join(' '));
    console.log("Answer : " + answerTotal);
    storedTotal = parseFloat(answerTotal);
    valuesToCalculate = [];
    temp = "";
    displayScreen(storedTotal);
}

function displayScreen(value) {
    var onScreenText = value;
    if (onScreenText === '') {
        onScreenText = '0';
    } else {
    document.getElementById('display').innerHTML = onScreenText;
    }
}

        /* If AC - empty array, temp and total.
              CE - empty temp.
              X  - push temp and push *
              /  - push temp and push /
            ( -  - push temp and check temp is not smaller than 0 then push - )
            (%  - push temp and push ((100 x temp) / total))
              =  - perform calculation of array values */