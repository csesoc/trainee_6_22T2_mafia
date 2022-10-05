import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import PlayerSelectButton from './PlayerSelectButton';
import '../style/TurnSelectScreen.css';
import { GameContext } from '../GameContext';

const PlayerSelectMenu = ({ title, func }) => {
  const { players } = useContext(GameContext);
  const [liveNames, setLiveNames] = useState(
    players.filter((player) => player.alive)
  );

  return (
    <div className="parent">
      <div className="parent-box">
        <h2> Action Menu </h2>
        <div className="select-box">
          <div className="scrollbar">
            <div>
              {' '}
              {title}
              <br></br>
              {liveNames.map((player) => (
                <PlayerSelectButton
                  playerName={player.name}
                  func={func}
                  key={player.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSelectMenu;
