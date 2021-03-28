module.exports = function findOdd(arr) {
    let count = {};
    arr.forEach(function(i) { count[i] = (count[i]||0) + 1});
    for(let x in count) { 
       if((count[x]%2)) return Number(x) 
    }
    return 0
  }
  