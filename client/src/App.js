import React, { useContext } from 'react';
import DayVotingMenu from './components/DayVotingMenu';
import MainMenu from './components/MainMenu';
import { GameContext } from './GameContext';
import './App.css';

function App() {
  const { currentPage } = useContext(GameContext);

  return (
    <div className="App">
      {currentPage === 'main' && <MainMenu />}
      {currentPage === 'voting' && <DayVotingMenu />}
    </div>
  );
}

export default App;
