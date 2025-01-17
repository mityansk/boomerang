// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
const { enemy } = require ('Enemy')
const { hero } = require ('Hero')

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
    this.state = 'hidden'
  }

  fly() {
    if (!enemy.position === '?') {
      this.moveRight();
    } else {
    this.moveLeft()
    };
  }

  moveLeft() {
   if (this.position !== hero.position) {
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
