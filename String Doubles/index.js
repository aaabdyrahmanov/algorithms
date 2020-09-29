function doubles(s) {
  let singles = ''
  for(let i=0; i < s.length; i++) {
    if(s[i] == s[i+1]) {
      i++
    } else if(singles.endsWith(s[i])) {
      singles = singles.slice(0, -1)
    } else if(!(singles.endsWith(s[i]))) {
      singles += s[i]
    }
  }
  return singles
}