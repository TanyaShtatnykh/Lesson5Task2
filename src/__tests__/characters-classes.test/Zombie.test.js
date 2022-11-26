import Zombie from '../../characters-classes/Zombie.js';

test('Zombie', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const newHero = new Zombie('Tanya');
  expect(correctHero).toEqual(newHero);
});
