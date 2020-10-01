function sayMeOperations(str) {
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

  /**
   * 
   * (sayMeOperations("2 2 4"), "addition")
   * 
   * sayMeOperations("1 2 3 5 8"), "addition, addition, addition")
   * 
   * sayMeOperations("15 15 225 240 54000 54240 2928960000 158866790400000 158869719360000 2.523912240647194e+28 2.52391224064721e+28 0",
   * "multiplication, addition, multiplication, addition, multiplication, multiplication, addition, multiplication, addition, division")
   * 
   */