const sumNested = arr => {
    var sum = 0
    if (typeof arr === 'number')
        return arr
    else {
        for (let i = 0; i < arr.length; ++i)
          sum += sumNested(arr[i])          
    }
    return sum
  }

    /**
   * 
   * sumNested([1, 2, 3, 40]), 46
   * 
   * sumNested([[ 1 ], [[ 1 ], [[ 1 ]]], [ 2 ]]), 5
   * 
   * sumNested([[ ], [ ], [[[[[[[[ ]]]]]]]], [[ ], [[ ]]], [[[ ], [[ ]]]], [ ]]), 0
   * 
   */