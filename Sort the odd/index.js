function sortArray(array) {
    const indexListOfEvens = []
    const listOfOdds = []
    
    array.map(a=>a%2!=0 ? listOfOdds.push(a) : indexListOfEvens.push(array.indexOf(a)))
    listOfOdds.sort((x,y)=> x-y)
  
    indexListOfEvens.map(a=> listOfOdds.splice(a,0,array[a]))
    return listOfOdds
  }

   /**
   * 
   * sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]
   * 
   * sortArray([ 32, 42, 15, 82, 87, 90 ]), [32, 42, 15, 82, 87, 90]
   * 
   * sortArray([ 0, 1, 2, 3, 4, 9, 8, 7, 6, 5 ]), [0, 1, 2, 3, 4, 5, 8, 7, 6, 9]
   * 
   */