import React, { useContext, useState } from 'react';
import './App.css';
import DayVotingMenu from './components/DayVotingMenu';
import MainMenu from './components/MainMenu';
import { GameContext } from './GameContext';

function App() {
  const { players } = useContext(GameContext);
  const [isVotingTime, setIsVotingTime] = useState(true);
  const [isMainMenu, setIsMainMenu] = useState(false);

  return (
    <div className="App">
      {isVotingTime && (
        <DayVotingMenu
          currentVoter={players[0]}
          setIsVotingTime={setIsVotingTime}
        />
      )}
      {isMainMenu && <MainMenu/>}
    </div>
  );
}

export default App;
