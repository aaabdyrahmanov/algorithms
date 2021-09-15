module.exports = function peak(arr) {
  let result1 = 0;
  let result2 = 0;
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    if (result1 > result2) {
      result2 += arr[last];
      last--;
    } else {
      result1 += arr[first];
      first++;
    }
  }

  return last == first && result1 == result2 ? last : -1;
};
