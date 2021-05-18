module.exports = function smallEnough(a, limit){
  return a.filter(x=> x<=limit).length == a.length
}