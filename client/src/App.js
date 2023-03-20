import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { GameList } from './pages/gameList';
import { GameRoom } from './pages/gameRoom';
import { CreateGame } from './pages/createGame';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/gamelist" element={<GameList />}></Route>
          <Route path="/gameroom" element={<GameRoom />}></Route>
          <Route path="/creategame" element={<CreateGame />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
