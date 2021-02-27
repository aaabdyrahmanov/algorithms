function iqTest(numbers){
    let evenIndexs = [], 
        oddIndexs = []
    numbers.split(' ').map((n,i)=> Number(n)%2== 0 ? oddIndexs.push(i+1) : evenIndexs.push(i+1))
    
    return evenIndexs.length == 1 ? evenIndexs[0] : oddIndexs[0]
  }

    /**
   * 
   * iqTest("2 4 7 8 10") => 3
   * 
   * iqTest("1 2 2") => 1
   * 
   * iqTest("43 28 1 91") => 2
   * 
   */