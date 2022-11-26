import Daemon from '../../characters-classes/Daemon.js';

test('Daemon', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const newHero = new Daemon('Tanya');
  expect(correctHero).toEqual(newHero);
});
