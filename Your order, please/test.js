const challenge = require('.');

it('Your order, please', () => {
  expect(challenge("")).toBe("");
  expect(challenge("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
  expect(challenge("4of Fo1r pe6ople g3ood th5e the2")).toBe("Fo1r the2 g3ood 4of th5e pe6ople");
});
