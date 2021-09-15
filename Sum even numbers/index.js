module.exports = function sumEvenNumbers(input) {
  return input.filter((i) => i % 2 == 0).reduce((a, b) => a + b);
};
