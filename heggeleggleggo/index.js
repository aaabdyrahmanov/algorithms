function heggeleggleggo (word) {
  return word.replace(/([bcdfghjklmnpqrstvwxyz])/gi, `$1egg`)
}
    /**
   * 
   * heggeleggleggo("hello"), "heggeleggleggo"
   * 
   * heggeleggleggo("code here"), "ceggodegge heggeregge"
   * 
   * heggeleggleggo("completed!"), "ceggomeggpeggleggeteggedegg!"
   * 
   */