function sumOfN(n) {
    let sumsArr = [0];
    let sum = 0
    for(let i = 1; i<=Math.abs(n);i++) {
      sum +=i
      sumsArr.push(n<0 ? sum*(-1) : sum)
    }
    return sumsArr
  };

    /**
   *  
   * sumOfN(1), [0, 1]
   * 
   * sumOfN(3), [0, 1, 3, 6]   
   * 
   * sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]
   * 
   */