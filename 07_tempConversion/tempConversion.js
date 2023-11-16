const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  let number = celsius; 
  rounded = Math.round(number * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  let number = fahrenheit; 
  rounded = Math.round(number * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


// npm test tempConversion.spec.js
