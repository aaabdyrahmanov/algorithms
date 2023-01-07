module.exports = function abbrevName(name) {
  const [firstName, lastName] = name.split(" ");
  
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
};
