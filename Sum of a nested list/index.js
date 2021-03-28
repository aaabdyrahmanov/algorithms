module.exports = function sumNested (arr) {
    var sum = 0
    if (typeof arr === 'number')
        return arr
    else {
        for (let i = 0; i < arr.length; ++i)
          sum += sumNested(arr[i])          
    }
    return sum
  }
