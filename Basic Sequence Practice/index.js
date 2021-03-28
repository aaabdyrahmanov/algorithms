module.exports = function sumOfN(n) {
    let sumsArr = [0];
    let sum = 0
    for(let i = 1; i<=Math.abs(n);i++) {
      sum +=i
      sumsArr.push(n<0 ? sum*(-1) : sum)
    }
    return sumsArr
  };
