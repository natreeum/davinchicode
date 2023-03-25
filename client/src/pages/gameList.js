import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import network from '../network';
import { socket } from './gameRoom';

export function GameList() {
  const [enterCode, setEnterCode] = useState('');
  const navigate = useNavigate();
  const btnClickHandler = () => {
    window.sessionStorage.clear();
    navigate('/');
  };
  const EG_btnClickHandler = async (e) => {
    if (enterCode.length === 0) return alert('enter the code');
    const gameInfo = await axios.get(
      `${network.ip}:${network.port}/getgame/${enterCode}`
    );
    if (gameInfo.data.message) {
      if (gameInfo.data.message.isStarted)
        return alert('This game is already started!');
      if (
        gameInfo.data.message.memList.length == gameInfo.data.message.maxMember
      )
        return alert(`This game is full!`);
    }

    if (gameInfo.data.status == 'success') {
      await axios.post(`${network.ip}:${network.port}/joinroom`, {
        id: window.sessionStorage.getItem('username'),
        code: enterCode,
      });
      socket.emit('join', gameInfo.data.message.code);
      window.sessionStorage.setItem('code', gameInfo.data.message.code);
      navigate('/gameroom');
    } else alert(`Game with code ${enterCode} does not exist`);
  };
  const CG_btnClickHandler = () => {
    navigate('/creategame');
  };
  const textHandler = (e) => setEnterCode(e.target.value);
  useEffect(() => {
    if (!window.sessionStorage.getItem('username')) navigate('/');
  }, []);
  return (
    <div>
      <div>
        <span>Hello {window.sessionStorage.getItem('username')}!</span>
        <br />
        <button onClick={btnClickHandler}>Logout</button>
        <br />
        <br />
        <button onClick={CG_btnClickHandler}>CreateGame</button>
        <br />
        <input
          type={'text'}
          placeholder="Enter Your Code"
          onChange={textHandler}
        />
        <button onClick={EG_btnClickHandler}>EnterGame</button>
      </div>
    </div>
  );
}
