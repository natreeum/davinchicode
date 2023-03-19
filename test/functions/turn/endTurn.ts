import { Game } from '../../class/game';

export function endTurn(gameCode: string, gameList: Game[]) {
  let game = new Game(0, '', '');
  for (let tgame of gameList) {
    if (tgame.code === gameCode) {
      game = tgame;
    }
  }
  game.turn = (game.turn + 1) % game.memList.length;
  console.log(`${game.memList[game.turn].id}의 차례`);
}
