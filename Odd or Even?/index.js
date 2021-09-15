module.exports = function oddOrEven(array) {
  let sum = 0;

  array.map((a) => (sum += a));

  return sum % 2 === 0 ? "even" : "odd";
};
