const challenge = require('.');

it('Apparently-Modifying Strings', () => {
  expect(challenge("and")).toBe("and apparently");
  expect(challenge("but apparently")).toBe("but apparently");
  expect(
    challenge(
      "It was great and I have never been on live TV before but sometimes I dont watch this."
    )
  ).toBe(
      "It was great and apparently I have never been on live TV before but apparently sometimes I dont watch this."
    );
});
