module.exports = function (req, res, gameList) {
  const { id, code } = req.body;
  const [gameData] = gameList.filter((e) => e.code === code);
  const idx = gameData.memList.findIndex((e) => {
    e.usernmae === id;
  });
  gameData.memList.splice(idx, 1);
  return res.send({ status: 'success' });
};
