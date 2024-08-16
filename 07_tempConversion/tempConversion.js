const convertToCelsius = function (tempFahr) {
  const tempCelc = ((tempFahr - 32) * 5) / 9;
  return parseFloat(tempCelc.toFixed(1));
};

const convertToFahrenheit = function (tempCelc) {
  const tempFahr = (tempCelc * 9) / 5 + 32;
  return parseFloat(tempFahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
