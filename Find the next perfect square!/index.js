module.exports = function findNextSquare(sq) {
  const number = Math.sqrt(sq);

  return Number.isInteger(number) ? (number + 1) ** 2 : -1;
};
