import React, { useEffect } from 'react';
import './App.css';
import { useContext } from 'react';
import MainMenu from './components/MainMenu';
import DisplayPlayerRoles from './components/DisplayPlayerRoles';
import TurnSelectScreen from './components/TurnSelectScreen';
import PlayerSelectMenu from './components/PlayerSelectMenu';
import ActionMenu from './components/ActionMenu';
import DayVotingMenu from './components/DayVotingMenu';
import { GameContext } from './GameContext';

function App() {
  const { currentPage } = useContext(GameContext);

  // const [page, setPage] = useState('turnSelect')

  return (
    <div className="App">
      {/* if (page === 'turnSelect' ? <TurnSelectScreen title="Select which player you are!" : <ActionMenu title="Select another player" ) */}

      {/* <TurnSelectScreen /> */}
      {/* <ActionMenu /> */}
      {currentPage === 'main' && <MainMenu />}
      {
        currentPage === 'displayPlayerRoles' && <DisplayPlayerRoles />
        /* testing page, do not include in production */
      }
      {currentPage === 'actionMenu' && <ActionMenu />}
      {currentPage === 'voting' && <DayVotingMenu />}
      {/* <ActionMenu title="Select another player"/> */}
    </div>
  );
}

export default App;
