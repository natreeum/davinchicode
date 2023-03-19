import { Game } from '../../class/game';

export function createGame(
  memAmount: number,
  creator: string,
  gameList: Game[]
) {
  if (memAmount < 2 || memAmount > 4)
    return console.log(`Member should be set 2~4`);
  const gameCode = `ABCD`;
  gameList.push(new Game(memAmount, creator, gameCode));
}
