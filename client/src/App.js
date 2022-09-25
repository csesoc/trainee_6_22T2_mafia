import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import './App.css';
import DayVotingMenu from './components/DayVotingMenu';
import MainMenu from './components/MainMenu';
import DeathMessage from './components/DeathMessage';
import TurnSelectScreen from './components/TurnSelectScreen';
import PlayerSelectMenu from './components/PlayerSelectMenu';
import ActionMenu from './components/ActionMenu';
import GameOver from './components/GameOver';

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
        return <PlayerSelectMenu />;
      case 'SelectAction':
        return <ActionMenu />;
      case 'GameOver':
        return <GameOver />;
      case 'TurnSelect':
        return <TurnSelectScreen />;
      default:
        return <></>;
    }
  };

  return <div className="App">{getCurrentPage()}</div>;
  // const [page, setPage] = useState('turnSelect')
}

export default App;
