function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  
    const month = birthday.getMonth();
    const day = birthday.getDate();
    
    return `The ${m[month]} ${d[day % 10]}`;
  }

  /**
   * 
   * getVillainName(new Date("May 3")), "The Despicable Raisin"
   * 
   * getVillainName(new Date("April 21")), "The Trashy Pickle"
   * 
   * getVillainName(new Date("July 11")), "The Disreputable Pickle"
   * 
   */