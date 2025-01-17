// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
const boomerang = require('./game-models/Boomerang')
// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  'space': () => boomerang.state = 'start',
  w: () => console.log('w'),
  e: () => console.log('e'),
  r: () => console.log('r'),
  t: () => console.log('t'),
  y: () => console.log('y'),
};

// Какая-то функция.

function runInteractiveConsole(boomerang) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if ('space') {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name]();
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

runInteractiveConsole();

// module.exports = runInteractiveConsole;