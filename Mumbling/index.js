function accum(str) {
    let result = ''
    
    for (let i = 0; i < str.length; i++) {
        result += str[i].toUpperCase()
      for (let j = 0; j < i; j++) {
        result += str[i].toLowerCase()
      }
      result += (i < (str.length - 1)) ? "-" : ""
    }

    return result
  }

  /**
   * 
   * accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
   * 
   * accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
   * 
   * accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
   * 
   */
