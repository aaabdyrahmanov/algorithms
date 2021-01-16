function apparently(string) {
    const splittedList = string.split(' ');
    const replacedList = splittedList.map((a,i)=> {
      if ((a === 'and' || a === 'but') && splittedList[i+1] !== 'apparently') {
        return a + ' apparently'
      } 
      return a;
    })
    return replacedList.join(' ')
  }

  /**
   * 
   * apparently('and') => 'and apparently'
   * 
   * apparently('but apparently') => 'but apparently'
   * 
   * apparently('It was great and I have never been on live TV before but sometimes I dont watch this.') =>
   *            'It was great and apparently I have never been on live TV before but apparently sometimes I dont watch this.');
   * 
   */
