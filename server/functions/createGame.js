const Game = require('../class/game');

module.exports = function createGame(gameList, memAmount, creatorID) {
  const code = Math.random().toString(36).slice(2, 8);
  const newGame = new Game(memAmount, creatorID, code);
  gameList.push(newGame);
};
