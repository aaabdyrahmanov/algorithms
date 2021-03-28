module.exports = function spacey(arr){
    let result = [],
        index = 1
    while(index<=arr.length) {
      let currentArr = arr.slice(0, index)
      result.push(currentArr.join(''))
      index++
    }
    return result
  }
