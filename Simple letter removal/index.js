module.exports = function solve (s, k) {
    let del = s.split``.sort().join``.slice(0, k);
    while (del) {
      s = s.replace(del[0], '');
      del = del.slice(1);
    }
    return s;
  }
