function spacey(arr){
    let result = [],
        index = 1
    while(index<=arr.length) {
      let currentArr = arr.slice(0, index)
      result.push(currentArr.join(''))
      index++
    }
    return result
  }

    /**
   * 
   * spacey(['Istanbul','is','so','crowded'), ['Istanbul','Istanbulis','Istanbulisso','Istanbulissocrowded']
   * 
   * spacey(['kevin', 'has','no','space']), [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
   * 
   * spacey(['this','cheese','has','no','holes']), ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']
   * 
   */