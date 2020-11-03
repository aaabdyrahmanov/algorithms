function descendingOrder(n){
    let arr = []
    for(let i=0;i<String(n).length;i++) {
     arr.push(parseInt(String(n)[i]))
    }  
    arr.sort((a,b)=>b-a)
    return parseInt(arr.join('')) 
  }

    /**
   * 
   * descendingOrder(1), 1
   * 
   * descendingOrder(021), 210
   * 
   * descendingOrder(123456789), 987654321
   * 
   */