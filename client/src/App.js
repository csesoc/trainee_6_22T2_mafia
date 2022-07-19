import './App.css';
import DayVotingMenu from './components/DayVotingMenu';
import { GameContext } from './GameContext';
import React, {useContext, useState} from 'react';

function App() {
  const { players, setPlayers } = useContext(GameContext)
  const [isVotingTime, setIsVotingTime] = useState(true)

  return (
    <div className="App">
        {isVotingTime && <DayVotingMenu currentVoter={players[0]} setIsVotingTime={setIsVotingTime}/>}
    </div>
  );
}

export default App;
