"use strict";
var assert = require("assert");

function isValidTemperature (temperature) {
    if (isNaN(temperature)) {
        return false;
    }
    else if (temperature == '') {
        return false;
    }
    else {
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

/* Test */

// Test isValidTemperature()
assert.strictEqual(true, isValidTemperature(23));
assert.strictEqual(true, isValidTemperature(-10));
assert.strictEqual(false, isValidTemperature("abc"));
assert.strictEqual(false, isValidTemperature(""));

// Test covertCelsiusToFahrenheit()
assert.strictEqual(-29, covertCelsiusToFahrenheit(-34));
assert.strictEqual(-0, covertCelsiusToFahrenheit(-18));
assert.strictEqual(93, covertCelsiusToFahrenheit(34));

// Test covertFahrenheitToCelsius()
assert.strictEqual(-73, covertFahrenheitToCelsius(-100));
assert.strictEqual(0, covertFahrenheitToCelsius(32));
assert.strictEqual(38, covertFahrenheitToCelsius(100));

