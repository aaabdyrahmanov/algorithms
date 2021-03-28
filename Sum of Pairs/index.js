module.exports = function sumPairs(ints, s) {
    let matches = {};
    for (let i = 0; i < ints.length; i++) {
        let match = s - ints[i];
        if (ints[i] in matches) {
            return [match, ints[i]]
        }
        else {
            matches[match] = i;
        }
    }
    return undefined;
  }
