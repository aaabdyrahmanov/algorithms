module.exports = function accum(str) {
    let result = ''
    
    for (let i = 0; i < str.length; i++) {
        result += str[i].toUpperCase()
      for (let j = 0; j < i; j++) {
        result += str[i].toLowerCase()
      }
      result += (i < (str.length - 1)) ? "-" : ""
    }

    return result
  }
