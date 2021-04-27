"use strict";

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

window.addEventListener('load', (event) => {
  document.getElementById('convertCelsiusToFahrenheit').addEventListener('click', () => {
    let resultInFahrenheit;
    let celsiusToConvert = Number(document.getElementById('celsiusToConvert').value);

    document.getElementById('resultInFahrenheit').value = "";

    if (isValidTemperature(celsiusToConvert) == true) {
      document.getElementById('error').innerHTML = '';
      resultInFahrenheit = covertCelsiusToFahrenheit(celsiusToConvert);
      document.getElementById('resultInFahrenheit').value = resultInFahrenheit;
    }
    else {
      document.getElementById('error').innerHTML = 'Temperature must be a valid number greater or less than 0.';
    }
  });

  document.getElementById('convertFahrenheitToCelsius').addEventListener('click', () => {
    let resultInCelsius;
    let fahrenheitToConvert = Number(document.getElementById('fahrenheitToConvert').value);

    document.getElementById('resultInCelsius').value = "";
    
    if (isValidTemperature(fahrenheitToConvert) == true) {
      document.getElementById('error').innerHTML = '';
      resultInCelsius = covertFahrenheitToCelsius(fahrenheitToConvert);
      document.getElementById('resultInCelsius').value = resultInCelsius;
    }
    else {
      document.getElementById('error').innerHTML = 'Temperature must be a valid number greater or less than 0.';
    }
  });
});