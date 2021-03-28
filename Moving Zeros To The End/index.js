module.exports = function moveZeros (arr) {
    let amountOfZeros = 0
    arr.map(a=> a === 0 ? amountOfZeros++: null)
    return [...arr.filter(a=>a !== 0), ...Array(amountOfZeros).fill(0)]
  }
