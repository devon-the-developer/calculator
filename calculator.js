// Set global variables

var valuesToCalculate = [];
var storedTotal = 0;
var temp = "";

//Check what buttons are clicked 

//Store button that is clicked in variable
function buttonClicked(buttonsValue) {
    //valuesToCalculate.push(buttonsValue);
    checkWhatButtonIs(buttonsValue);
    console.log("Button Clicked: " + buttonsValue);
    console.log("Stored ValuesToCalculate : " + valuesToCalculate);
    console.log("Stored temp: " + temp);
    //displayTemp();
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

//Display on Calculator Screen 
// function displayTemp() {
//     document.getElementById("answer").innerHTML = temp;
//     console.log("temp to be displayed: " + temp);
// }

function calculateAnswer() {
    var answerTotal = eval(valuesToCalculate.join(' '));
    console.log("Answer : " + answerTotal);
    storedTotal = answerTotal;
}

        /* If AC - empty array, temp and total.
              CE - empty temp.
              X  - push temp and push *
              /  - push temp and push /
            ( -  - push temp and check temp is not smaller than 0 then push - )
            (%  - push temp and push ((100 x temp) / total))
              =  - perform calculation of array values */