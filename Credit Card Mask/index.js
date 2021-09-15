module.exports = function maskify(cc) {
  if (cc.length < 4) {
    return cc;
  }

  const remaining = cc.slice(cc.length - 4, cc.length);
  const masked = cc.replace(/[a-zA-Z0-9]/g, "#").slice(0, cc.length - 4);

  return masked.concat(remaining);
};
