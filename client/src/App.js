import React, { useEffect } from 'react';
import './App.css';
import { useContext } from 'react';
import MainMenu from './components/MainMenu';
import TurnSelectScreen from './components/TurnSelectScreen';
import PlayerSelectMenu from './components/PlayerSelectMenu';
import ActionMenu from './components/ActionMenu';
import DayVotingMenu from './components/DayVotingMenu';
import { GameContext } from './GameContext';
import Discussion from './components/Discussion';

function App() {
  const { currentPage } = useContext(GameContext);

  // const [page, setPage] = useState('turnSelect')

  return (
    <div className="App">
      {/* if (page === 'turnSelect' ? <TurnSelectScreen title="Select which player you are!" : <ActionMenu title="Select another player" ) */}

      {/* <TurnSelectScreen /> */}
      {/* <ActionMenu /> */}
      {currentPage === 'main' && <MainMenu />}
      {currentPage === 'actionMenu' && <ActionMenu />}
      {currentPage === 'voting' && <DayVotingMenu />}
      {currentPage === 'discussion' && <Discussion />}
      {/* <ActionMenu title="Select another player"/> */}
    </div>
  );
}

export default App;
