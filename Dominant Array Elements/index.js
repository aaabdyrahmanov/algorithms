function solve(arr){
    const result = [];
    for (let i = 0; i < arr.length; ++i) {
      if (arr.slice(i + 1).every((el) => el < arr[i])) result.push(arr[i])
    }
    return result;
  };

    /**
   *
   *  solve([ 76,17,25,36,29]),[76,36,29]
   *
   * solve([ 75,47,42,56,13,55]), [75,56,55]
   * 
   * solve([ 104,18,37,9,36,47,28]),[104,47,28]
   * 
   */