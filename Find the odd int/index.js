function findOdd(arr) {
    let count = {};
    arr.forEach(function(i) { count[i] = (count[i]||0) + 1});
    for(let x in count) { 
       if((count[x]%2)) return Number(x) 
    }
    return 0
  }
  
   /**
   * 
   * findOdd([ 10 ]), 10
   * 
   * findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]), 5
   * 
   * findOdd([ 5, 4, 3, 2, 1, 5, 4, 3, 2, 10,10]), 1
   * 
   */