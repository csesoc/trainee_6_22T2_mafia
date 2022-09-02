import React, { useContext } from 'react';
import { GameContext } from '../GameContext';
import '../style/Graveyard.css';

const Graveyard = () => {
  const { players } = useContext(GameContext);

  let deadPlayers = [];
  players.forEach((player) => {
    if (!player.alive) {
      deadPlayers.push(player);
    }
  });

  return (
    <div className="graveyard">
      <h2>Graveyard</h2>
      <div className="graveyardScroll">
        {deadPlayers.map((player) => (
          <div className="graveyardListItem">
            <h3>
              {player.name}
              <br />
              {player.role}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graveyard;
