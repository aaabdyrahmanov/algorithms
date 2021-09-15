module.exports = function cutTheRopes(a) {
  const uniqueValues = [...new Set(a)].sort((x, y) => x - y);
  const r = [a.length];

  uniqueValues.forEach((i) => {
    const { length } = a.filter((j) => j > i);
    if (length) r.push(length);
  });

  return r;
};
