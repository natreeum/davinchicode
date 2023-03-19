import { Game } from '../../class/game';

export function joinGame(gameCode: string, userId: string, gameList: Game[]) {
  for (let game of gameList) {
    if (game.code === gameCode) {
      // exception handling
      if (game.isStarted === true)
        return console.log(`The game is already started`);
      if (game.memList.length === game.maxMember)
        return console.log(`The game is full`);

      return game.memList.push({ id: userId, opend: [], unopend: [] });
    }
  }
  return console.log(`Game with code ${gameCode} does not exist`);
}
