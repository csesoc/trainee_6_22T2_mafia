import React, { useContext, useEffect, useState } from 'react';
import '../style/gameOver.css';
import { GameContext } from '../GameContext';

const GameOver = () => {
  const { players, winner, roles } = useContext(GameContext);

  let winners = [];
  let losers = [];

  for (const player of players) {
    let role = roles.find((role) => role.name === player.role);

    if (winner === 'mafia') {
      if (role === undefined || !role.isEvil) {
        losers.push(player.name);
      } else {
        winners.push(player.name);
      }
    } else {
      if (role === undefined || !role.isEvil) {
        winners.push(player.name);
      } else {
        losers.push(player.name);
      }
    }
  }

  return (
    <div className="gameOver">
      <h1>THE {winner} WON!</h1>
      <h2>Thanks for playing :)</h2>
      <div className="playerList">
        <div className="winnerList">
          <h2> Winners: </h2>
          {winners.map((player) => (
            <p className="playerName"> {player} </p>
          ))}
        </div>
        <div className="loserList">
          <h2> Losers: </h2>
          {losers.map((player) => (
            <p className="playerName"> {player} </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameOver;
