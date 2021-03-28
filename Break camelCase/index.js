module.exports = function solution(string) {
    let arr = []
    
    for(let i=0; i<string.length; i++) {
      if(string[i] == string[i].toUpperCase()) arr.push(i)
    }
    arr.map((m,i)=> string = [string.slice(0, m+i), ' ', string.slice(m+i)].join(''))  
    
    return string;
  }
