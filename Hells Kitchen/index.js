module.exports = function gordon(a) {
  return `${a
    .replace(/ /g, "!!!! ")
    .replace(/a|A/g, "@")
    .replace(/e|i|o|u/g, "*")
    .toUpperCase()}!!!!`;
};
