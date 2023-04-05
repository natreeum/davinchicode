import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import network from '../network';

import { socket } from './gameRoom';

export function CreateGame() {
  const nav = useNavigate();
  const C_btnClickHandler = async () => {
    const newGame = await axios.post(
      `${network.ip}:${network.port}/creategame`,
      {
        memAmount: memCount,
        creatorID: window.sessionStorage.getItem('username'),
      }
    );
    window.sessionStorage.setItem('code', newGame.data.gameInfo.code);
    socket.emit('join', window.sessionStorage.getItem('code'));
    nav(`/gameroom`);
  };
  const r_HandleChange = (e) => {
    setMemCount(e.target.value);
  };
  const [memCount, setMemCount] = useState('2');

  return (
    <div>
      <div>
        <span>2 Player</span>
        <input
          type={'radio'}
          name={'memCnt'}
          value={2}
          onChange={r_HandleChange}
          checked={memCount === '2'}
        ></input>
      </div>
      <div>
        <span>3 Player</span>
        <input
          type={'radio'}
          name={'memCnt'}
          value={3}
          onChange={r_HandleChange}
          checked={memCount === '3'}
        ></input>
      </div>
      <div>
        <span>4 Player</span>
        <input
          type={'radio'}
          name={'memCnt'}
          value={4}
          onChange={r_HandleChange}
          checked={memCount === '4'}
        ></input>
      </div>
      <button onClick={C_btnClickHandler}>Create</button>
    </div>
  );
}
