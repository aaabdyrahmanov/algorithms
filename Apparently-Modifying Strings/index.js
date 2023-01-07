module.exports = function apparently(string) {
  return string.replace(/(and|but)(?! apparently)/g, "$1 apparently");
};
