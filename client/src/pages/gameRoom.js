import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import network from '../network';

export const socket = io.connect(`${network.ip}:${network.port}`);

export function GameRoom() {
  const nav = useNavigate();
  const [gameInfo, setGameInfo] = useState({
    code: window.sessionStorage.getItem('code'),
    memList: [],
  });
  const btn_exit_clickHandler = async () => {
    const exitRes = await axios.post(`${network.ip}:${network.port}/exitroom`, {
      id: window.sessionStorage.getItem('username'),
      code: window.sessionStorage.getItem('code'),
    });
    socket.emit('join', gameInfo.code);
    window.sessionStorage.removeItem('code');
    nav('/gamelist');
  };
  useEffect(() => {
    socket.on(gameInfo.code, (data) => {
      setGameInfo(data);
    });
  }, [socket]);
  return (
    <div>
      <div>room code : {gameInfo.code}</div>
      {gameInfo.memList.map((e) => (
        <div key={e.id}>{e.id}</div>
      ))}
      <button onClick={btn_exit_clickHandler}>exit</button>
    </div>
  );
}
