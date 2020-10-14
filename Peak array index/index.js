function peak(arr){
    let result1 = 0;
    let result2 = 0;
    let first = 0;
    let last = arr.length-1
    while(first<last){
      if(result1>result2) {
        result2+=arr[last]
        last--;
      } else if (result1<=result2) {
        result1+=arr[first];
        first++;
      }
    }
    return last==first && result1 == result2 ? last :-1 
  }

   /**
   * 
   * peak([ 1, 12, 3, 3, 6, 3, 1 ]), 2
   * 
   * peak([ 10, 20, 30, 40 ]), -1
   * 
   * peak([ 3, 1, 1, 6, 6, 4, 3, 8, 4, 9, 7, 5, 5, 1, 5, 10, 8, 10, 4, 2, 7, 9, 2, 9, 2, 6, 5, 3, 8, 10, 9, 1, 11, 5, 14, 3, 8, 7, 6, 5, 3, 7, 2, 8, 3, 13, 3, 1,15, 12 ]), -1
   * 
   */