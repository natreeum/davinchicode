const Game = require('../class/game');

module.exports = function createGame(gameList, memAmount, creatorID) {
  const code = 'abcd';
  const newGame = new Game(memAmount, creatorID, code);
  gameList.push(newGame);
};
