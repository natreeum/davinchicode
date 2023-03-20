import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function CreateGame() {
  const nav = useNavigate();
  const C_btnClickHandler = async () => {
    console.log(memCount);
    const newGame = await axios.post('http://localhost:3001/creategame', {
      memAmount: memCount,
      creatorID: window.sessionStorage.getItem('username'),
    });
    console.log(newGame);
    nav('/');
  };
  const r_HandleChange = (e) => {
    setMemCount(e.target.value);
  };
  const [memCount, setMemCount] = useState(2);

  return (
    <div>
      <div>
        <span>2 Player</span>
        <input
          type={'radio'}
          name={'memCnt'}
          value={2}
          onChange={r_HandleChange}
        ></input>
      </div>
      <div>
        <span>3 Player</span>
        <input
          type={'radio'}
          name={'memCnt'}
          value={3}
          onChange={r_HandleChange}
        ></input>
      </div>
      <div>
        <span>4 Player</span>
        <input
          type={'radio'}
          name={'memCnt'}
          value={4}
          onChange={r_HandleChange}
        ></input>
      </div>
      <button onClick={C_btnClickHandler}>Create</button>
    </div>
  );
}
