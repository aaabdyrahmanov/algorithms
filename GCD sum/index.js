function solve (s, g) { 
    return s % g ? -1 : [g, s-g]
}

    /**
   * 
   * solve(6,3) =>  [3,3]
   * 
   * solve(10,3) => -1
   * 
   * solve(12,4) => [4,8]
   * 
   */
