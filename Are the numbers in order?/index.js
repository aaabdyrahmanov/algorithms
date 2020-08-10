/**
  * @desc checks whether an array is in ascending order or not
  * @param  {Object[]} arr-list of numbers
  * @returns {boolean}
*/

function isInAscOrder(arr) {
    const filteredArr = arr.filter((each,index)=> (arr[index]>=arr[index+1]) ? false : true)
    if(filteredArr.length !== arr.length){
      return false
    } return true
}
  

// isInAscOrder([89,123,444,521,999]);  returns true
// isInAscOrder([4,5,6,7,8]);  returns true
// isInAscOrder([1,2,4,1,18,3,2]);  returns false
// isInAscOrder([5,4,3,2,1]);  returns false because the numbers are in DESCENDING order