module.exports = function abbrevName(name) {
  return name
    .split(" ")
    .map((w) => w[0].toUpperCase())
    .join(".");
};
