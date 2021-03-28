module.exports = function meeting(s) {
    s = (s.replace(/:/g, ', ').toUpperCase()).split(';');
    s = s.map(a=> a.split(', '));
    s = s.map((k, i)=> s[i] = k[1] + ', ' + k[0]);
    return "(" + s.sort().join(")(") + ")";
  }
