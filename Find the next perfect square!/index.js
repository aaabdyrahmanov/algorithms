module.exports = function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  return Number.isInteger(number) ? Math.pow((number+1), 2) : -1
}