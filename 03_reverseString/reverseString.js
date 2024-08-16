const reverseString = function(inputStr) {
    reversedString = "";
    for (let i = inputStr.length - 1; i >= 0; i--)
        reversedString += inputStr[i];
      return reversedString
};

// Do not edit below this line
module.exports = reverseString;