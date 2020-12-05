function validSpacing(s) {
    return s.trim() == s && !s.includes("  ");
  }

  /**
   * 
   * validSpacing('Hello world'), true
   * 
   * validSpacing('Hello'), true    
   * 
   * validSpacing('Hello  world '), false  
   * 
   */