module.exports = function joinRoom(req, res, gameList) {
  const body = req.body;
  const userId = body.id;
  const gameCode = body.code;
  const [gameData] = gameList.filter((e) => e.code == gameCode);
  gameData.memList.push({ id: userId, opend: [], unopend: [] });
  return res.send({ status: 'success' });
};
