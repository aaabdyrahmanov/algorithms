module.exports = function iqTest(numbers) {
  const evenIndexs = [];
  const oddIndexs = [];

  numbers
    .split(" ")
    .map((n, i) =>
      Number(n) % 2 == 0 ? oddIndexs.push(i + 1) : evenIndexs.push(i + 1)
    );

  return evenIndexs.length == 1 ? evenIndexs[0] : oddIndexs[0];
};
