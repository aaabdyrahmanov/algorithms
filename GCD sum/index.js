module.exports = function solve(s, g) {
  return s % g ? -1 : [g, s - g];
};
