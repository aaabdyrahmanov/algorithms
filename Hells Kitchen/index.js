function gordon(a) {
    return a.replace(/ /g, '!!!! ')
      .replace(/a|A/g, '@')
      .replace(/e|i|o|u/g, '*')
      .toUpperCase() + '!!!!'
  }

    /**
   * 
   * gordon('What feck damn cake') => 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
   * 
   * gordon('are you stu pid') => '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
   * 
   * gordon('i am a chef') => '*!!!! @M!!!! @!!!! CH*F!!!!'
   * 
   */