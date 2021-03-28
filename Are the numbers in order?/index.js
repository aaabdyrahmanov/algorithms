/**
  * @desc checks whether an array is in ascending order or not
  * @param  {Object[]} arr-list of numbers
  * @returns {boolean}
*/

module.exports = function isInAscOrder(arr) {
    const filteredArr = arr.filter((each,index)=> (arr[index]>=arr[index+1]) ? false : true)
    if(filteredArr.length !== arr.length){
      return false
    } return true
}
  
