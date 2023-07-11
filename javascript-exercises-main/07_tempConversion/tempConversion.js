const convertToCelsius = function(temp) {
  let tempC = (temp - 32) * (5/9)
  return Math.round(tempC * 10) / 10
};

const convertToFahrenheit = function(temp) {
  let tempF = temp * 1.8 + 32
  return Math.round(tempF * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
