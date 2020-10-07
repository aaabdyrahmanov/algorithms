function repeats(arr){
    const duplicateList = []
    arr.sort((a,b) => a-b)
    for(let i=0; i<arr.length; i++) {
      if(arr[i+1] == arr[i]) {
        duplicateList.push(arr[i])
      }
    }
    const filteredArr = arr.filter(t=> !duplicateList.includes(t))
    return filteredArr.reduce((a, b) => a + b);
  }

  /**
   * 
   * repeats([4,5,7,5,4,8]),15
   * 
   * repeats([ 5, 10, 10, 13, 13, 19 ]), 24
   * 
   * repeats([ 5, 11, 11, 13, 13, 17, 18, 18 ]), 22
   * 
   */