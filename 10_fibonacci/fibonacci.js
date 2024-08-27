const fibonacci = function (num) {
  num = parseInt(num);
  if (num < 0) {
    return "OOPS";
  } else if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else if (num === 2) {
    return 1;
  } else {
    let a = 1,
      b = 1,
      temp;
    for (let i = 3; i <= num; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
};

// Do not edit below this line
module.exports = fibonacci;
