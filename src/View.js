const { input } = require('@inquirer/prompts');

class View {
  render(track) {
    const user = userName;
    const yourTeamName = 'Mighty Mushrooms';

    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log('`${user} играет сейчас');
    console.log(`Created by "${yourTeamName}" with love`);
  }

  async getUserName() {
    const name = await input({ message: 'Введи имя:' });
    return name;
  }

  gameOver(userName) {
    console.clear();
    console.log(`Игра окончена, ${userName}!`);
  }
}
new View().getUserName();
module.exports = View;
