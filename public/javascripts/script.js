"use strict";
import {isValidTemperature, covertCelsiusToFahrenheit, covertFahrenheitToCelsius} from "./calculation-functions.js";

window.addEventListener('load', (event) => {
  document.getElementById('convertCelsiusToFahrenheit').addEventListener('click', () => {
    let resultInFahrenheit;
    let celsiusToConvert = Number(document.getElementById('celsiusToConvert').value);

    if (isValidTemperature(celsiusToConvert) == true) {
      resultInFahrenheit = covertCelsiusToFahrenheit(celsiusToConvert);
      document.getElementById('resultInFahrenheit').value = resultInFahrenheit;
    }
  });

  document.getElementById('convertFahrenheitToCelsius').addEventListener('click', () => {
    let resultInCelsius;
    let fahrenheitToConvert = Number(document.getElementById('fahrenheitToConvert').value);
    
    if (isValidTemperature(fahrenheitToConvert) == true) {
      resultInCelsius = covertFahrenheitToCelsius(fahrenheitToConvert);
      document.getElementById('resultInCelsius').value = resultInCelsius;
    }
  });
});