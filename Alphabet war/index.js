module.exports = function alphabetWar(fight) {
  const powers = {
    w: -4,
    p: -3,
    b: -2,
    s: -1,
    z: 1,
    d: 2,
    q: 3,
    m: 4,
  };
  const sum = fight.split("").reduce((total, ch) => total + powers[ch], 0);
  
  if (sum < 0) return "Left side wins!";
  if (sum > 0) return "Right side wins!";
  
  return "Let's fight again!";
}
