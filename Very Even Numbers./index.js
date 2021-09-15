module.exports = function isVeryEvenNumber(n) {
  const sumOfArr = (arr) => arr.reduce((i, v) => i + v, 0);
  if (n < 10) return n % 2 === 0;

  const arr = n
    .toString()
    .split("")
    .map((a) => Number(a));

  return isVeryEvenNumber(sumOfArr(arr));
};
