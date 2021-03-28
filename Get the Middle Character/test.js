const challenge = require('.');

it('Get the Middle Character', () => {
  expect(challenge("test")).toBe("es");
  expect(challenge("testing")).toBe("t");
  expect(
    challenge(
      "qSncXTsBWVlTrsUhoZGqMeULmfWFrWAvRnJscyBfzlwKJvMAnWVmFbTGsvRBAwDzvsryRkFixgknrLRHGfDjWJjHJLwEdyXYoeserZaesnpnLkcjAtjReNFYryljjXOsELBEytJaDtJFLGeRLdkrvIuaUctYsDVTkOyYmqEgaOOaBjBqAUlIApXVOBIZxEmdephwsFehWhmWMjfxsanZGiAjBojwtOqTr"
    )
  ).toBe("A");
});
