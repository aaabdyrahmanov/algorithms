function abbrevName(name){
    return name.split(' ').map(w=> w[0].toUpperCase()).join('.')
  }

    /**
   * 
   * abbrevName("Patrick Feenan"), "P.F"
   * 
   * abbrevName("David Mendieta"), "D.M"
   * 
   * abbrevName("rctRkikHpPKSUmWL fVWpPsJoYahVLdNZFH"), "R.F"
   * 
   */