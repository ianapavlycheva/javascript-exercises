const palindromes = function (str) {
  const isPalindrome = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return isPalindrome === isPalindrome.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
