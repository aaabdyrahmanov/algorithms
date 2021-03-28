module.exports = function cutTheRopes(a) {
    const uniqueValues = [...new Set(a)].sort((a,b)=> a-b)
    const r = [a.length]
    
    uniqueValues.forEach(i=> {
      const length = a.filter(j => j > i).length
      if(length) r.push(length)                      
    })
    return r
  }
