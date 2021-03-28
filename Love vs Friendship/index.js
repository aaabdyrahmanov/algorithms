module.exports = function wordsToMarks(string){
    var total = 0;
    for(var i = 0; i < string.length; i++){
      total += string[i].charCodeAt() - 96;
    }
    return total;
  }
