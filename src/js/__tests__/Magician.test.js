import Character from '../Magician';

test('create Character ok', () => {
  const character = new Character('Harry', 'Magician');
  const result = {
    name: 'Harry',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
