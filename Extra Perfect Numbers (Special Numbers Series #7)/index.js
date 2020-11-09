function extraPerfect(n){
    var str=[1];
    for (var i=3; i<=n; i++) {
      if (i%2!==0) {
        str.push(i);
      }
    }
    return str;
  }

    /**
   * 
   * extraPerfect(3), [1,3]
   * 
   * extraPerfect(5), [1,3,5]
   * 
   * extraPerfect(28), [1,3,5,7,9,11,13,15,17,19,21,23,25,27]
   * 
   */