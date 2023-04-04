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
    maxMember: '0',
  });
  const [curMemCnt, setCurMemCnt] = useState(1);
  const btn_exit_clickHandler = async () => {
    await axios.post(`${network.ip}:${network.port}/exitroom`, {
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
      setCurMemCnt(data.memList.length);
    });
  }, [socket]);
  return (
    <div>
      <div>room code : {gameInfo.code}</div>
      <div>Max member : {gameInfo.maxMember}</div>
      <br />
      <div>Member List({curMemCnt})</div>
      <div>==========</div>
      {gameInfo.memList.map((e) => (
        <div key={e.id}>{e.id}</div>
      ))}
      <button onClick={btn_exit_clickHandler}>exit</button>
    </div>
  );
}
