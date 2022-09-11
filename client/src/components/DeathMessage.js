import React, { useContext, useEffect, useState } from 'react';
import '../style/deathMessage.css';
import '../style/button.css';
import { GameContext } from '../GameContext';

const DeathMessage = () => {
  //TODO
  //should a player be able to vote for themselves???

  const {
    players,
    setPlayers,
    setCurrentPage,
    currentPage,
    votes,
    setVotes,
    isDay,
    setIsDay,
    dayNum,
    setDayNum,
  } = useContext(GameContext);

  const [deadPlayer, setDeadPlayer] = useState(-1);

  function calcDeath() {
    let highestKillVotes = [0]; //player id array
    let highestSaveVotes = [0]; //player id array

    players.forEach((player) => {
      if (player.id !== 0) {
        if (votes.kill[player.id] > votes.kill[highestKillVotes[0]]) {
          highestKillVotes = [player.id];
        } else if (votes.kill[player.id] === votes.kill[highestKillVotes[0]]) {
          highestKillVotes.push(player.id);
        }
        if (votes.save[player.id] > votes.save[highestSaveVotes[0]]) {
          highestSaveVotes = [player.id];
        } else if (votes.save[player.id] === votes.save[highestSaveVotes[0]]) {
          highestSaveVotes.push(player.id);
        }
      }
    });

    //choose a random player in the highestKillVotes array to kill
    let toKill =
      highestKillVotes[Math.floor(Math.random() * highestKillVotes.length)];

    let toSave = -1; //invalid array index
    if (doctorAlive()) {
      //choose a random player in the highestSaveVotes array to save
      toSave =
        highestSaveVotes[Math.floor(Math.random() * highestSaveVotes.length)];
    }

    if (currentPage === 'nightVoting') {
      //night time: save votes count.
      if (toKill === toSave) {
        return;
      }
    }

    setDeadPlayer(toKill);
    let newPlayers = [...players];
    newPlayers[toKill] = {
      name: players[toKill].name,
      alive: false,
      role: players[toKill].role,
      id: toKill,
      hasVoted: players[toKill].hasVoted,
    };

    setPlayers(newPlayers);
  }

  const nextPhase = () => {
    if (isDay) {
      setIsDay(false);
      setCurrentPage('NightMessage');
    } else {
      setIsDay(true);
      setCurrentPage('Discussion');
      setDayNum((dayNum) => dayNum + 1);
    }
    resetVotes();
  };

  function doctorAlive() {
    let doctorFound = false;
    players.forEach((player) => {
      if (player.alive && player.role === 'doctor') {
        doctorFound = true;
        return;
      }
    });
    return doctorFound;
  }

  const resetVotes = () => {
    let newVotes = {
      ...votes,
    };

    players.forEach((player) => (newVotes.kill[player.id] = 0));
    players.forEach((player) => (newVotes.save[player.id] = 0));

    setVotes(newVotes);

    let newPlayers = [...players];
    newPlayers.forEach((player) => (player.hasVoted = false));

    setPlayers(newPlayers);
  };

  useEffect(() => {
    calcDeath();
  }, []);

  return (
    <div className="deathMessage">
      <h1 className="dayHeader">
        {isDay ? 'Day ' : 'Night '}
        {dayNum}
      </h1>
      <h1 className="deathName">
        DEATH: {deadPlayer === -1 ? 'Noone...' : players[deadPlayer].name}
      </h1>
      <h2 className="deathDescription">
        {isDay && deadPlayer !== -1
          ? players[deadPlayer].name + ' was a ' + players[deadPlayer].role
          : ''}
      </h2>
      <button className="button" onClick={nextPhase}>
        lol
      </button>
    </div>
  );
};

export default DeathMessage;
