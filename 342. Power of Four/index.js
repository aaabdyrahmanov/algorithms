module.exports = function isPowerofFour(num) {
  if (num === 1) return true;
  if (num < 4) return false;
  
  return isPowerofFour(num / 4);
};
