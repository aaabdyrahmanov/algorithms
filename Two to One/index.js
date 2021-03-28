module.exports = function longest(s1, s2) {
    const string = s1 + s2
    return string.split('').filter((list, index, arr) => arr.indexOf(list) === index).sort().join('')
  }
  