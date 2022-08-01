import React, { useContext } from 'react';
import '../style/button.css';
import { GameContext } from '../GameContext';
import DisplayPlayer from './DisplayPlayer';

const DisplayPlayerRoles = () => {
  const { players, setCurrentPage } = useContext(GameContext);

  const changePage = () => {
    setCurrentPage('voting');
  };

  return (
    <div>
      <h1>Game Preview (FOR TESTING ONLY)</h1>
      <div>Number of players: {players.length}</div>
      <div>
        {players.map((player) => (
          <DisplayPlayer player={player} />
        ))}
      </div>
      <div className="button" onClick={changePage}>
        Next
      </div>
    </div>
  );
};

export default DisplayPlayerRoles;
