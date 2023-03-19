import { Game } from '../../class/game';
import { draw1Card } from '../../utils/drawCard';
import { sortCards } from '../../utils/sortCards';

export function startGame(gameCode: string, gameList: Game[]) {
  // initialize game
  let game = new Game(0, '', '');
  for (let tgame of gameList) {
    if (tgame.code === gameCode) {
      game = tgame;
    }
  }

  game.isStarted = true;
  for (let member of game.memList) {
    for (let cnt = 0; cnt < 4; cnt++) {
      member.unopend.push(draw1Card(game.numbers.length, game));
    }
    sortCards(member.unopend);
  }
  game.numbers.push('w-', 'b-');
  console.log(`${game.memList[game.turn].id}의 차례`);
  // ----------
}
