module.exports = function solve(s, k) {
  let receivedString = s;
  let del = receivedString.split``.sort().join``.slice(0, k);

  while (del) {
    receivedString = receivedString.replace(del[0], "");
    del = del.slice(1);
  }

  return receivedString;
};
