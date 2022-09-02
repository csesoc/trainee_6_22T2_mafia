import React, { useContext, useEffect, useState } from 'react';
import Tabs from './Tabs';
import '../style/MainMenu.css';
import '../style/button.css';
import { GameContext } from '../GameContext';

const MainMenu = () => {
  const {
    roles,
    players,
    setPlayers,
    numMafia,
    numTownspeople,
    setCurrentPage,
    setDayNum,
  } = useContext(GameContext);

  // BACKEND
  const assignRoles = (roleNumbers) => {
    const playerRoles = [];

    // Create an array with the right amount of entries
    Object.entries(roleNumbers).forEach(([key, value]) => {
      for (let i = 0; i < value; i++) {
        playerRoles.push(key);
      }
    });

    // Shuffle array using
    // Fisher-Yates algorithm
    for (let i = playerRoles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = playerRoles[i];
      playerRoles[i] = playerRoles[j];
      playerRoles[j] = temp;
    }

    const newPlayers = [...players];
    for (const i in players) {
      players[i].role = playerRoles[i];
    }
    setPlayers(newPlayers);

    return true;
  };

  const resetMenuErrors = () => {
    return {
      playerCountError: false,
      tooEvil: false,
    };
  };

  const [menuErrors, setMenuErrors] = useState(resetMenuErrors());

  useEffect(() => {
    setMenuErrors(resetMenuErrors());
  }, [roles]);

  const setMenuError = (error) => {
    const newMenuErrors = { ...menuErrors };
    newMenuErrors[error] = true;
    setMenuErrors(newMenuErrors);
  };

  const verifyPlayers = () => {
    if (players.length !== numTownspeople + numMafia) {
      setMenuError('playerCountError');
      return false;
    }
    if (numTownspeople <= numMafia + 1) {
      setMenuError('tooEvil');
      return false;
    }
    return true;
  };

  const setupGame = () => {
    assignRoles(
      roles.reduce((prev, next) => ({ ...prev, [next.name]: next.count }), {})
    );
    setDayNum(1);
  };

  const startGame = () => {
    if (verifyPlayers()) {
      setupGame();
      // Change to 'voting' when pushing
      setCurrentPage('discussion');
    }
    return;
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
          <p>
            {menuErrors['playerCountError'] &&
              'Number of players is not equal to number of roles!'}
            <br></br>
            {menuErrors['tooEvil'] && 'Too many evil roles!'}
          </p>
          <p>
            Players: {players.length} / Mafia: {numMafia} / Townspeople:{' '}
            {numTownspeople}
          </p>
          <button onClick={startGame}>Begin!</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
