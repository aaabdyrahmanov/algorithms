function replaceAll(seq, find, replace) {
    if(Array.isArray(seq)) {
      seq.map((s,i)=> s == find ? seq[i] = replace : null)
    } else if(typeof seq ==='string'){
        return [...seq].map((x)=> x == find ? replace : x).join('')
    }

    return seq 
}

    /**
   * 
   * replaceAll([], 1, 2), []
   * 
   * replaceAll(Hello World, 'o', 0), 'Hell0 W0rld'
   * 
   * replaceAll([1,2,2], 1, 2), [2,2,2]
   * 
   */