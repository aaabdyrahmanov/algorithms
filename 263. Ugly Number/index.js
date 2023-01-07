module.exports = function isUgly(num) {
  if (num < 1) return false;

  for (let divisor of [2, 3, 5]) {
    while (num % divisor === 0) {
      num /= divisor;
    }
  }

  return num === 1;
};
