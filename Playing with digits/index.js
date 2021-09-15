module.exports = function digPow(n, p) {
  const x = String(n);
  let t = 0;

  for (let i = p - 1; i < x.length + p - 1; i++) {
    t += Number(x[i - p + 1]) ** (i + 1);
  }

  return t % n == 0 ? t / n : -1;
};
