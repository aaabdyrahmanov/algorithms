const isPowerofFour = (num) => {
    if (num===1) {
        return true
    }
    let f = 4
    while (f<=num) {
        if (f===num) {
            return true
        }
        f*=4
    }
    return false
}

// isPowerofFour(64)  ->  true
// isPowerofFour(127) ->  false
// isPowerofFour(1)   ->  true
