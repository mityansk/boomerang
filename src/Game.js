// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const keyboard = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.boomerang = new Boomerang(this.hero, this.enemy);
    this.view = new View();
    this.track = Array(trackLength).fill(' ');
    keyboard(this.boomerang);
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position - 1] = this.enemy.skin;
    if (this.boomerang.state === 'start') {
      this.track[this.boomerang.position + 1] = this.boomerang.skin;
      if (this.boomerang.position + 2 === this.enemy.position) {
        this.enemy.die();
      }
      this.boomerang.fly();
    }
    if (this.boomerang.state === 'hidden') {
      this.track[this.boomerang.position + 1] = ' ';
    }
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 100);
  }
}

module.exports = Game;
