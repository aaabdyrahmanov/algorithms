module.exports = function longest(s1, s2) {
  return (s1 + s2)
    .split("")
    .filter((list, index, arr) => arr.indexOf(list) === index)
    .sort()
    .join("");
};
