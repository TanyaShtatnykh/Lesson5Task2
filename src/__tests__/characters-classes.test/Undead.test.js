import Undead from '../../characters-classes/Undead.js';

test('Undead', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const newHero = new Undead('Tanya');
  expect(correctHero).toEqual(newHero);
});
