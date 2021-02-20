function order () { 
    return words.split(' ').sort((x,y) => x.match(/[0-9]/)-y.match(/[0-9]/)).join(' ')
}
    /**
   * 
   * order("") => ""
   * 
   * order("is2 Thi1s T4est 3a") => "Thi1s is2 3a T4est"
   * 
   * order("4of Fo1r pe6ople g3ood th5e the2") => "Fo1r the2 g3ood 4of th5e pe6ople"
   * 
   */