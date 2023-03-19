import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const btnClickHandler = () => {
    if (username === '') return alert('Enter username');
    window.sessionStorage.setItem('username', username);
    navigate(`/gamelist`);
  };
  const textHandler = (el) => {
    setUsername(el.target.value);
  };
  return (
    <div>
      <div>Username</div>
      <input
        type={'text'}
        className="id"
        placeholder="username"
        onChange={textHandler}
      ></input>
      <button onClick={btnClickHandler}>Start</button>
    </div>
  );
}
