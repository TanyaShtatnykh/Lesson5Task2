import Swordsman from '../../characters-classes/Swordsman.js';

test('Swordsman', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const newHero = new Swordsman('Tanya');
  expect(correctHero).toEqual(newHero);
});
