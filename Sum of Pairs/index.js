module.exports = function sumPairs(ints, s) {
  const matches = {};

  for (let i = 0; i < ints.length; i++) {
    const match = s - ints[i];
    if (ints[i] in matches) {
      return [match, ints[i]];
    }

    matches[match] = i;
  }

  return undefined;
};
