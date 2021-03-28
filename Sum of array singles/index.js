module.exports = function repeats(arr){
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
