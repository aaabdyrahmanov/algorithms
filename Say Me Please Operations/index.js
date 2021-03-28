module.exports = function sayMeOperations(str) {
    const numberList = str.split(" ").map(a=> parseInt(a))
    const operationList = []

    for(let i=1; i<(numberList.length-1); i++) {
       if(numberList[i-1]+numberList[i] == numberList[i+1]) {
        operationList.push("addition")
      } else if(numberList[i-1]-(numberList[i]) == numberList[i+1]) {
        operationList.push("subtraction")
      } else if(numberList[i-1] * numberList[i] == Number(numberList[i+1])) {
        operationList.push('multiplication')
      } else {
        operationList.push('division')
      } 
    }
    
    const operationListAsString = operationList.toString().split(",").join(", ");;
    return operationListAsString
  }
