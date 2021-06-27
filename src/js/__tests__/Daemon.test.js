import Character from '../Daemon';

test('create Character ok', () => {
  const character = new Character('Harry', 'Daemon');
  const result = {
    name: 'Harry',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
