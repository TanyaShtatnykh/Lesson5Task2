import Character from '../Character.js';

test('incorrect name', () => {
  expect(() => new Character('N', 'Magician')).toThrow();
  expect(() => new Character('NoneNoneNoneNone', 'Magician')).toThrow();
});

test('incorrect type', () => {
  expect(() => new Character('Name', 'Student')).toThrow();
});

test('Create character', () => {
  const newHero = new Character('Tanya', 'Magician');
  const correctHero = {
    name: 'Tanya',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(newHero).toEqual(correctHero);
});

test('Methods levelUp and damage test', () => {
  const newHero = new Character('Jack', 'Undead');
  newHero.attack = 25;
  newHero.defence = 25;
  const HeroLevelUp = {
    name: 'Jack',
    type: 'Undead',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  newHero.damage(10);
  newHero.levelUp();
  expect(newHero).toEqual(HeroLevelUp);
});

test('Methods levelUp and damage test error', () => {
  const newHero = new Character('Jack', 'Undead');
  newHero.attack = 25;
  newHero.defence = 25;
  newHero.damage(1000);
  expect(() => newHero.levelUp()).toThrow();
});
