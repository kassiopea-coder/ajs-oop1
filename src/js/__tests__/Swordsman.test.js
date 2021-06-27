import Character from '../Swordsman';

test('create Character ok', () => {
  const character = new Character('Harry', 'Swordsman');
  const result = {
    name: 'Harry',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
