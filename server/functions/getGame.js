module.exports = function getGame(req, res, gameList) {
  const [gameInfo] = gameList.filter((e) => e.code === req.params.code);
  if (gameInfo)
    return res.status(200).send({ status: 'success', message: gameInfo });
  else return res.status(200).send({ status: 'failed', message: 'no' });
};
