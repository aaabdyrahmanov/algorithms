module.exports = function replaceAll(seq, find, replace) {
    if(Array.isArray(seq)) {
      seq.map((s,i)=> s == find ? seq[i] = replace : null)
    } else if(typeof seq ==='string'){
        return [...seq].map((x)=> x == find ? replace : x).join('')
    }

    return seq 
}
