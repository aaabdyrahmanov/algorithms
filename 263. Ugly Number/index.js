const isUgly = (num) =>{
    if(num<1) return false
    while (num>=2) {
        if(num%2===0) num = num/2
        else if(num%3===0) num = num/3
        else if(num%5===0) num = num/5
        else return false
    }
    return true
}

// isUgly(24)  ->  true
// isUgly(60)  ->  true
// isUgly(123) ->  false