module.exports = function extraPerfect(n){
    var str=[1];
    for (var i=3; i<=n; i++) {
      if (i%2!==0) {
        str.push(i);
      }
    }
    return str;
  }
