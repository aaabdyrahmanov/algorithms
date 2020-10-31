function sumPairs(ints, s) {
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

    /**
   * 
   * sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7]
   * 
   * sumPairs([5, 9, 13, -3], 10), [13, -3]
   * 
   * sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7]
   * 
   */