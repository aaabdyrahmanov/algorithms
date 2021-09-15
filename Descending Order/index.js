module.exports = function descendingOrder(n) {
  const arr = [];

  for (let i = 0; i < String(n).length; i++) {
    arr.push(parseInt(String(n)[i]));
  }
  arr.sort((a, b) => b - a);

  return parseInt(arr.join(""));
};
