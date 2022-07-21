import React, { useEffect } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import TurnSelectScreen from './components/TurnSelectScreen';
import ActionMenu from './components/PlayerSelectMenu';

function App() {
  
  // const [page, setPage] = useState('turnSelect')


  return (
    <div> 
      {/* if (page === 'turnSelect' ? <TurnSelectScreen title="Select which player you are!" : <ActionMenu title="Select another player" ) */}

      {/* <TurnSelectScreen /> */}
      <ActionMenu />
      {/* <ActionMenu title="Select another player"/> */}
    </div>
  )
}

//pass props in to turn select
export default App;


