import { Game } from '../class/game';

export function draw1Card(length: number, game: Game) {
  const randNum = Math.floor(Math.random() * length);
  const drawNum = game.numbers[randNum];
  game.numbers.splice(randNum, 1);
  return drawNum;
}
