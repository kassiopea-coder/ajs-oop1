import Character from '../Undead';

test('create Character ok', () => {
  const character = new Character('Harry', 'Undead');
  const result = {
    name: 'Harry',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
