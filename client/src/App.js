import React, { useContext, useEffect } from 'react';
import DayVotingMenu from './components/DayVotingMenu';
import MainMenu from './components/MainMenu';
import DeathMessage from './components/DeathMessage';
import { GameContext } from './GameContext';
import './App.css';

function App() {
  const { currentPage } = useContext(GameContext);

  return (
    <div className="App">
      <DeathMessage />
    </div>
  );
}

export default App;
