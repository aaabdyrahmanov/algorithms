const challenge = require('.');

it('heggeleggleggo', () => {
  expect(challenge("hello")).toBe("heggeleggleggo");
  expect(challenge("code here")).toBe("ceggodegge heggeregge");
  expect(challenge("completed!")).toBe("ceggomeggpeggleggeteggedegg!");
});
