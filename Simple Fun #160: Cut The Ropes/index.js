function cutTheRopes(a) {
    const uniqueValues = [...new Set(a)].sort((a,b)=> a-b)
    const r = [a.length]
    
    uniqueValues.forEach(i=> {
      const length = a.filter(j => j > i).length
      if(length) r.push(length)                      
    })
    return r
  }

    /**
   * 
   * cutTheRopes([3, 3, 2, 9, 7]),[5, 4, 2, 1]
   * 
   * cutTheRopes([1, 2, 3, 4, 3, 3, 2, 1]),[8, 6, 4, 1]
   * 
   * cutTheRopes([13035, 6618, 13056, 20912, 1119, 13035, 6618, 6618, 8482, 13056]),[10, 9, 6, 5, 3, 1]
   * 
   */