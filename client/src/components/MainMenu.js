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
      insufficientPlayers: false,
      invalidNick: false,
      playerCountError: false,
      tooEvil: false,
    };
  };

  const [menuErrors, setMenuErrors] = useState(resetMenuErrors());

  const setMenuError = (errors) => {
    const newMenuErrors = { ...resetMenuErrors() };
    for (const error of errors) newMenuErrors[error] = true;
    setMenuErrors(newMenuErrors);
  };

  const duplicates = () => {
    const usernames = {};
    for (const player of players) {
      const playerName = player.name;
      if (usernames[playerName] !== undefined) return true;
      else usernames[playerName] = true;
    }
    return false;
  };

  const invalidNick = () => {
    const empty = players.reduce(
      (prev, next) => prev || next.name.length === 0,
      false
    );
    const dup = duplicates();
    return empty || dup;
  };

  const verifyPlayers = () => {
    const errors = [];
    const numPlayers = players.length;

    if (invalidNick()) errors.push('invalidNick');

    if (numPlayers <= 3) errors.push('insufficientPlayers');
    else {
      if (numPlayers !== numTownspeople + numMafia)
        errors.push('playerCountError');
      if (numTownspeople <= numMafia + 1) errors.push('tooEvil');
    }

    setMenuError(errors);
    // If there are errors, we cannot start the game yet
    return errors.length > 0 ? false : true;
  };

  useEffect(() => {
    verifyPlayers();
  }, [roles, players.length]);

  const setupGame = () => {
    assignRoles(
      roles.reduce((prev, next) => ({ ...prev, [next.name]: next.count }), {})
    );
    setDayNum(0);
  };

  const startGame = () => {
    if (verifyPlayers()) {
      setupGame();
      setCurrentPage('TurnSelect');
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
          {menuErrors['insufficientPlayers'] && (
            <p>You need at least four players!</p>
          )}
          {menuErrors['invalidNick'] && <p>Not all usernames are valid!</p>}
          {menuErrors['playerCountError'] && (
            <p>Number of players is not equal to number of roles!</p>
          )}
          {menuErrors['tooEvil'] && <p>Too many evil roles!</p>}
          <p>
            Players: {players.length} / Mafia: {numMafia} / Townspeople:{' '}
            {numTownspeople}
          </p>
          (If you think the errors are wrong try switching between the two
          settings)
          <br />
          <button onClick={startGame}>Begin!</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
