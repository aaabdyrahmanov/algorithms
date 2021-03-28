const challenge = require('.');

it('Sort Colors', () => {
  expect(challenge([0])).toStrictEqual([0]);
  expect(challenge([2, 0, 1])).toStrictEqual([0, 1, 2]);
  expect(challenge([2,0,2,1,1,0])).toStrictEqual([0,0,1,1,2,2]);
});
