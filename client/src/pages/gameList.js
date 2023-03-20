import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

export function GameList() {
  // const socket = io.connect('http://localhost:3001');
  // useEffect(() => {
  //   socket.on('roomList', (d) => {
  //     console.log(d);
  //   });
  // }, [socket]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!window.sessionStorage.getItem('username')) navigate('/');
  }, []);
  const btnClickHandler = () => {
    window.sessionStorage.clear();
    navigate('/');
  };
  const EG_btnClickHandler = () => {
    // socket.emit('send_message', { message: 'hello' });
  };
  const CG_btnClickHandler = async () => {
    navigate('/creategame');
  };
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
        <input type={'text'} placeholder="Enter Your Code" />
        <button onClick={EG_btnClickHandler}>EnterGame</button>
      </div>
    </div>
  );
}
