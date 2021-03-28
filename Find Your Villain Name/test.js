const challenge = require('.');

it('Find Your Villain Name', () => {
  expect(challenge(new Date("May 3"))).toBe("The Despicable Raisin");
  expect(challenge(new Date("April 21"))).toBe("The Trashy Pickle");
  expect(challenge(new Date("July 11"))).toBe("The Disreputable Pickle");
});
