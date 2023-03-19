import { createGame } from './functions/game/createGame';
import { joinGame } from './functions/game/joinGame';
import { Game } from './class/game';
import { startGame } from './functions/game/startGame';

const gameList: Game[] = [];

const fuser: string = `user1`;
const suser: string = `user2`;
const tuser: string = `user3`;

createGame(4, fuser, gameList);
joinGame('ABCD', suser, gameList);
startGame('ABCD', gameList);
