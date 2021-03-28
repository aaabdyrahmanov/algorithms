const challenge = require('.');

it('Love vs Friendship', () => {
  expect(challenge("family")).toBe(66);
  expect(challenge("selfness")).toBe(99);
  expect(challenge("knowledge")).toBe(96);
});
