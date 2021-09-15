module.exports = function maxNumber(n) {
  const largest = String(n).split("").sort().reverse().join("");

  return Number(largest);
};
