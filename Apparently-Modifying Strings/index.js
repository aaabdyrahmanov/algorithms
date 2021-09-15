module.exports = function apparently(string) {
  const splittedList = string.split(" ");
  const replacedList = splittedList.map((a, i) => {
    if ((a === "and" || a === "but") && splittedList[i + 1] !== "apparently") {
      return `${a} apparently`;
    }

    return a;
  });

  return replacedList.join(" ");
};
