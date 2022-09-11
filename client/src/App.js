import React, { useContext } from 'react';
import DayVotingMenu from './components/DayVotingMenu';
import MainMenu from './components/MainMenu';
import DeathMessage from './components/DeathMessage';
import { GameContext } from './GameContext';
import './App.css';
import { useContext } from 'react';
import MainMenu from './components/MainMenu';
import TurnSelectScreen from './components/TurnSelectScreen';
import PlayerSelectMenu from './components/PlayerSelectMenu';
import ActionMenu from './components/ActionMenu';
import DayVotingMenu from './components/DayVotingMenu';
import { GameContext } from './GameContext';

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
  // const [page, setPage] = useState('turnSelect')
}

export default App;
