const getMiddle = (s) => {
    const middleIndex = s.length/2;
    
    if(s.length%2==0){
      return s.slice(middleIndex-1,middleIndex+1)
    } 
    return s.slice(middleIndex,middleIndex+1)
  }
  

  /**
   * 
   * getMiddle("test"),"es"
   * 
   * getMiddle("testing"),"t"
   * 
   * getMiddle("qSncXTsBWVlTrsUhoZGqMeULmfWFrWAvRnJscyBfzlwKJvMAnWVmFbTGsvRBAwDzvsryRkFixgknrLRHGfDj
   *    WJjHJLwEdyXYoeserZaesnpnLkcjAtjReNFYryljjXOsELBEytJaDtJFLGeRLdkrvIuaUctYsDVTkOyYmqEgaOOaBjBq
   *    AUlIApXVOBIZxEmdephwsFehWhmWMjfxsanZGiAjBojwtOqTr"), 'A'
   * 
   */
  