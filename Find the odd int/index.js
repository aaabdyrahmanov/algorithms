module.exports = function findOdd(arr) {
  const count = {};

  arr.forEach((i) => {
    count[i] = (count[i] || 0) + 1;
  });

  for (const x in count) {
    if (count[x] % 2) return Number(x);
  }

  return 0;
};
