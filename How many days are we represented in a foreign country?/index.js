module.exports = function daysRepresented(trips) {
  const colleagueDays = [];
  const companyDays = [];

  trips.forEach((v) => {
    for (let i = v[0]; i <= v[1]; i++) colleagueDays.push(i);
  });
  colleagueDays.map((x) => companyDays.push(x));

  return companyDays.filter((a, i) => companyDays.indexOf(a) == i).length;
};
