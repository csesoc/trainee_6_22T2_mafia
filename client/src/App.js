import React, {useContext, useState} from 'react';
import './App.css';
import DayVotingMenu from './components/DayVotingMenu';
import { GameContext } from './GameContext';

function App() {
  const { players } = useContext(GameContext)
  const [isVotingTime, setIsVotingTime] = useState(true)

  return (
    <div className="App">
        {isVotingTime && <DayVotingMenu currentVoter={players[0]} setIsVotingTime={setIsVotingTime}/>}
    </div>
  );
}

export default App;
