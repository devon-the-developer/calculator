// Set global variables

var valuesToCalculate = [];
var total = 0;
var temp = "";
var buttonValue;

//Check what buttons are clicked 


function buttonClicked(buttonsValue) {
    console.log(buttonsValue);
}

    //Store button that is clicked in variable
    //Have a function that checks stored button variable against options then do them.

//If any numbers are clicked, store value as temporary string and dispay on screen
    //check if number with isNan() or decimal

//If any other button rather than number, decimal or equals is clicked add temporary 
    //string to array then add the clicked symbol and clear temp

        /* If AC - empty array, temp and total.
              CE - empty temp.
              X  - push temp and push *
              /  - push temp and push /
            ( -  - push temp and check temp is not smaller than 0 then push - )
            (%  - push temp and push ((100 x temp) / total))
              =  - perform calculation of array values */