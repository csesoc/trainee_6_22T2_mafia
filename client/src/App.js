import React from 'react';
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

  // const [page, setPage] = useState('turnSelect')

  return (
    <div className="App">
      {/* if (page === 'turnSelect' ? <TurnSelectScreen title="Select which player you are!" : <ActionMenu title="Select another player" ) */}

      {/* <TurnSelectScreen /> */}
      {/* <ActionMenu /> */}
      {currentPage === 'main' && <MainMenu />}
      {currentPage === 'actionMenu' && <ActionMenu />}
      {currentPage === 'voting' && <DayVotingMenu />}
      {/* <ActionMenu title="Select another player"/> */}
    </div>
  );
}

export default App;

// UI Comments
// BEGIN GAME button should grey out if game starting is invalid
// VOTE FOR PLAYER radio button too small
//  - and make it clearer that you can press it
// TIMER should give more of a warning
// MAIN MENU use more of the screen
//  - make the +- buttons larger
// Make the theme black + dark red
