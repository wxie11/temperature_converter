"use strict";

function isValidTemperature (temperature) {
    if (isNaN(temperature)) {
        document.getElementById('error').innerHTML = 'Temperature must be a number.';
        return false;
    }
    else if (temperature == '') {
        document.getElementById('error').innerHTML = 'Temperature is required.';
        return false;
    }
    else {
        document.getElementById('error').innerHTML = '';
        return true;
    }
}

function covertCelsiusToFahrenheit (celsius) {  
    let fahrenheit = celsius * 9/5 + 32;
    return Math.round(fahrenheit);
}

function covertFahrenheitToCelsius (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return Math.round(celsius);
}

export {isValidTemperature, covertCelsiusToFahrenheit, covertFahrenheitToCelsius};