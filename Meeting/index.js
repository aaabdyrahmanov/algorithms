module.exports = function meeting(s) {
  const received = s;
  const modified = s
    .replace(/:/g, ", ")
    .toUpperCase()
    .split(";")
    .map((a) => a.split(", "))
    .map((k, i) => (received[i] = `${k[1]}, ${k[0]}`));

  return `(${modified.sort().join(")(")})`;
};
