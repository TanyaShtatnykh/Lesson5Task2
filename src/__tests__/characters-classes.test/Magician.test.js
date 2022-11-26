import Magician from '../../characters-classes/Magician.js';

test('Magician', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const newHero = new Magician('Tanya');
  expect(correctHero).toEqual(newHero);
});
