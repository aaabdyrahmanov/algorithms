const challenge = require('.');

it('Hells Kitchen', () => {
  expect(challenge("What feck damn cake")).toBe("WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!");
  expect(challenge("are you stu pid")).toBe("@R*!!!! Y**!!!! ST*!!!! P*D!!!!");
  expect(challenge("i am a chef")).toBe("*!!!! @M!!!! @!!!! CH*F!!!!");
});
