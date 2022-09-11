import React, { useContext } from 'react';
import DayVotingMenu from './components/DayVotingMenu';
import MainMenu from './components/MainMenu';
import DeathMessage from './components/DeathMessage';
import { GameContext } from './GameContext';
import './App.css';

function App() {
  const { currentPage } = useContext(GameContext);

  const getCurrentPage = () => {
    switch (currentPage) {
      case 'DayVoting':
        return <DayVotingMenu />;
      case 'DeathMessage':
        return <DeathMessage />;
      case 'MainMenu':
        return <MainMenu />;
      case 'SelectVoter':
        return <h1>This would be a screen where you select the next voter.</h1>;
      default:
        return <></>;
    }
  };

  return <div className="App">{getCurrentPage()}</div>;
}

export default App;
