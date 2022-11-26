import Bowerman from '../../characters-classes/Bowerman.js';

test('Bowerman', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const newHero = new Bowerman('Tanya');
  expect(correctHero).toEqual(newHero);
});
