module.exports = function stringMerge(str1, str2, letter){
    const index1 = str1.slice(0, str1.indexOf(letter))
    const index2 = str2.slice(str2.indexOf(letter), str2.length);
    return index1.concat(index2)
  }
