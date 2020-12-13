function daysRepresented(trips){
    let colleagueDays = [];
    let companyDays = [];
    trips.map(v => {
      for (let i=v[0];i<=v[1];i++) colleagueDays.push(i)
    });
    colleagueDays.map(x=> companyDays.push(x));
    return companyDays.filter((a, i)=> companyDays.indexOf(a) == i).length;
  }

    /**
   * 
   * daysRepresented([[ 10, 15 ], [ 25, 35 ]]), 17
   * 
   * daysRepresented([[ 2, 8 ], [ 6, 16 ], [ 17, 26 ]]), 25
   * 
   * daysRepresented([[ 2, 8 ], [ 220, 229 ], [ 10, 16 ]]), 24
   * 
   */