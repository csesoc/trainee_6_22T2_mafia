import React, { useContext } from 'react';
import Tabs from './Tabs';
import '../style/MainMenu.css';
import '../style/button.css';
import { GameContext } from '../GameContext';

const MainMenu = () => {
  const { players, numMafia, numTownspeople, setCurrentPage, setDayNum } =
    useContext(GameContext);

  const verifyPlayers = () => {
    if (players.length !== numTownspeople.length + numMafia.length) {
      return false;
    }
    if (numMafia >= numTownspeople + 1) {
      return false;
    }
    return true;
  };

  const setupGame = () => {
    setDayNum(1);
    return true;
  };

  const startGame = () => {
    // the below functions return true if run successfully and false otherwise
    verifyPlayers() && setupGame() && setCurrentPage('actionMenu');
  };

  return (
    <div className="parent">
      <div className="parent-box">
        <div>
          <h1>Welcome to Mafia</h1>
        </div>
        <div>
          <Tabs />
        </div>
        <div>
          <button onClick={startGame}>Begin!</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
