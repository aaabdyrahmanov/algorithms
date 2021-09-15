module.exports = function sumNested(arr) {
  if (typeof arr === "number") return arr;

  let sum = 0;
  for (let i = 0; i < arr.length; ++i) sum += sumNested(arr[i]);

  return sum;
};
