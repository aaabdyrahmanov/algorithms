function createPhoneNumber(n){
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
  }

    /**
   * 
   * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890'
   * 
   * createPhoneNumber([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]), '(111) 111-1111'
   * 
   * createPhoneNumber([ 2, 1, 4, 0, 9, 3, 7, 7, 8, 2 ]), '(214) 093-7782'
   * 
   */