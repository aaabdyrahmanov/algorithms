module.exports = function addArrays(array1, array2) {
    if(!array1.length || !array2.length) return array1.length ? array1 : array2
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    const sumOfNums = String(arrayToNumber1 + arrayToNumber2).split('');
    
    // in case result is less than zero
    if(sumOfNums[0] == '-') {
      sumOfNums.shift()
      sumOfNums[0] = `-${sumOfNums[0]}`
    }
    return sumOfNums.map(a=> Number(a))
  }
