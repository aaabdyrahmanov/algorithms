module.exports = function addDigits(number) {
  while (number > 9) {
    number = number.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);
  }

  return number;
};
