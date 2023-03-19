import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { GameList } from './pages/gameList';
import { GameRoom } from './pages/gameRoom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/gamelist" element={<GameList />}></Route>
          <Route path="/gameroom" element={<GameRoom />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
