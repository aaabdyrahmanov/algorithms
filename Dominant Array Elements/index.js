module.exports = function solve(arr){
    const result = [];
    for (let i = 0; i < arr.length; ++i) {
      if (arr.slice(i + 1).every((el) => el < arr[i])) result.push(arr[i])
    }
    return result;
  };
