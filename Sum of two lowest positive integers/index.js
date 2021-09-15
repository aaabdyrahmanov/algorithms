module.exports = function sumTwoSmallestNumbers(numbers) {
  numbers.sort((x, y) => x - y);

  return numbers[1] + numbers[0];
};
