module.exports = function evenOrOdd(str) {
    let odds = 0,
        evens = 0;
    for(let i=0; i<str.length; i++) {
      if(Number(str[i]) % 2) {
        odds += Number(str[i])
      } else {
        evens += Number(str[i])
      }
    }
    
    return odds>evens ? 'Odd is greater than Even' : (odds<evens ? 'Even is greater than Odd' : 'Even and Odd are the same')
  }
