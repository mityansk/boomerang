// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
// const enemy = require ('./Enemy')
// const hero = require ('./Hero')

class Boomerang {
  constructor(hero, enemy) {
    this.skin = '🌀';
    this.position = 0;
    this.state = 'hidden';
    this.hero = hero;
    this.enemy = enemy;
  }

  fly() {
    if (this.enemy.position !== '?') {
      this.moveRight();
    } else {
    this.moveLeft()
    };
  }

  moveLeft() {
   if (this.position !== this.hero.position) {
    this.position -= 1;
   } else {
    this.state = 'hidden'
  }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  
}

module.exports = Boomerang;
