const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const createGame = require('./functions/createGame');
const getGame = require('./functions/getGame');
const joinRoom = require('./functions/joinRoom');
const path = require('path');
const exitRoom = require('./functions/exitRoom');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'src')));

const server = http.createServer(app);
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
});

const io = new Server(server, { cors: { methods: ['GET', 'POST'] } });
io.on('connection', (socket) => {
  console.log(`Connected : ${socket.id}`);
  socket.on('join', (d) => {
    const [gameData] = gameList.filter((e) => e.code === d);
    socket.emit(d, gameData);
    socket.broadcast.emit(d, gameData);
  });
});

const gameList = [];
app.post('/creategame', (req, res) => {
  const newGame = createGame(gameList, req, res, io);
  return res.status(200).send({ status: 'success', gameInfo: newGame });
});

app.get('/gamelist', (req, res) => {
  res.send(gameList);
});

app.get('/getgame/:code', (req, res) => {
  getGame(req, res, gameList);
});

app.post('/joinroom', (req, res) => {
  joinRoom(req, res, gameList);
});

app.post('/exitroom', (req, res) => {
  exitRoom(req, res, gameList);
});
