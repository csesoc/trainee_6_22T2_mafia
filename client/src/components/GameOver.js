import React, { useContext, useEffect, useState } from 'react';
import '../style/gameOver.css';
import { GameContext } from '../GameContext';

const GameOver = () => {
  const { players, winner, mafiaRoleList, townRoleList } =
    useContext(GameContext);

  let winners = [];
  let losers = [];

  for (const player of players) {
    if (winner === 'mafia') {
      if (mafiaRoleList.includes(player.role)) {
        winners.push(player.name);
      } else {
        losers.push(player.name);
      }
    } else if (winner === 'joker') {
      if (player.role === 'joker') {
        winners.push(player.name);
      } else {
        losers.push(player.name);
      }
    } else {
      if (townRoleList.includes(player.role) && player.role !== 'joker') {
        winners.push(player.name);
      } else {
        losers.push(player.name);
      }
    }
  }

  console.log('winners: ' + winners);
  console.log('losers: ' + losers);
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
