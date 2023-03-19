const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const createGame = require('./functions/createGame');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);
server.listen(3001, () => {
  console.log('server listening on 3001');
});

const io = new Server(server, { cors: { methods: ['GET', 'POST'] } });
io.on('connection', (socket) => {
  console.log(`Connected : ${socket.id}`);
  // socket.on('send_message', (d) => {
  //   console.log(d);
  // });
  // socket.emit('roomList', gameList);
});

const gameList = [];

app.post('/creategame', (req, res) => {
  const body = req.body;
  console.log(body);
  if (Object.keys(body).length != 2) return res.status(400).send('bad');
  createGame(gameList, body.memAmount, body.creatorID);
  io.emit('roomList', gameList);
  return res.status(200).send('gameCreated');
});

app.get('/gamelist', (req, res) => {
  res.send(gameList);
});
