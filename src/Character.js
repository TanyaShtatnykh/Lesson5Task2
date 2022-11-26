export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Допустимая длина имени от 2-х до 10-и символов');
    } else {
      this.name = name;
    }

    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Такого персонажа не существует');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
