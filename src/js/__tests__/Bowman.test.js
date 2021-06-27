import Character from '../Bowman';

test('create Character ok', () => {
  const character = new Character('Harry', 'Bowman');
  const result = {
    name: 'Harry',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
