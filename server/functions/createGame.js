const Game = require('../class/game');

module.exports = function createGame(gameList, req, res, io) {
  const body = req.body;
  if (Object.keys(body).length != 2) return res.status(400).send('bad');

  const code = Math.random().toString(36).slice(2, 8);
  const newGame = new Game(body.memAmount, body.creatorID, code);
  gameList.push(newGame);

  io.on('connection', (socket) => {
    socket.emit('gameList', gameList);
    socket.emit(code, newGame);
  });
  return newGame;
};
