module.exports = function readZalgo(zalgotext) {
  const letters = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"|,.<>/?]*$/;
  const moralArray = zalgotext
    .split("")
    .map((a) => (a.match(letters) || a == " " ? a : null));

  return moralArray.filter((a) => a !== null).join("");
};
