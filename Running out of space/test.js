const challenge = require('.');

it('Running out of space', () => {
  expect(challenge(["Istanbul","is","so","crowded"])).toStrictEqual(['Istanbul','Istanbulis','Istanbulisso','Istanbulissocrowded']);
  expect(challenge(['kevin', 'has','no','space'])).toStrictEqual(['kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
  expect(challenge(['this','cheese','has','no','holes'])).toStrictEqual(['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);
});
