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
    votes,
    setVotes,
    isDay,
    setIsDay,
    dayNum,
    setDayNum,
    setWinner,
    mafiaRoleList,
    townRoleList,
  } = useContext(GameContext);

  const [deadPlayer, setDeadPlayer] = useState(-1);
  let firstTime = true;

  function calcDeath() {
    //its so weird it seems to be doing everything twice, this is to try stop it.
    if (!firstTime) {
      return;
    }

    firstTime = false;

    let finalVotes = []; //all player ids and their asscosiated votes

    players.forEach((player) => {
      finalVotes.push({
        player: player.id,
        killVotes: votes.kill[player.id],
        saveVotes: votes.save[player.id],
      });
    });

    //sort the finalVotes array by killvotes, descending order
    finalVotes.sort((a, b) => {
      if (!players[a.player].alive) {
        return 1;
      }

      if (!players[b.player].alive) {
        return -1;
      }

      if (b.killVotes - a.killVotes === 0) {
        //choose random positive or negative number: two elements are put in random order if votes are the same.
        return Math.random() * 2 - 1;
      }
      return b.killVotes - a.killVotes;
    });

    const toKill = finalVotes[0].player;

    if (doctorAlive() && !isDay) {
      //sort the finalVotes array by savevotes, descending order
      finalVotes.sort((a, b) => {
        if (!players[a.player].alive) {
          return 1;
        }

        if (!players[b.player].alive) {
          return -1;
        }

        if (b.saveVotes - a.saveVotes === 0) {
          //choose random positive or negative number: two elements are put in random order if votes are the same.
          return Math.random() * 2 - 1;
        }
        return b.saveVotes - a.saveVotes;
      });

      if (finalVotes[0].player === toKill) {
        return;
        //the player to kill has been saved, so noone dies.
        //the deadPlayer useSate is already -1 so no need to update.
      }
    }

    setDeadPlayer(toKill);
    let newPlayers = [...players];
    newPlayers[toKill].alive = false;

    if (newPlayers[toKill].role === 'joker' && isDay) {
      //joker succeeded in their task: getting themself voted off
      triggerGameOver('JOKER');
    }

    setPlayers(newPlayers);
  }

  function checkGameOver() {
    //game over if:
    //- num mafia > num townspeople
    //- no mafia left

    let numMafia = 0;
    let numTownspeople = 0;
    for (const player of players) {
      if (player.alive) {
        if (mafiaRoleList.includes(player.role, 0)) {
          numMafia++;
        } else if (townRoleList.includes(player.role, 0)) {
          numTownspeople++;
        }
      }
    }

    if (numMafia === 0) {
      triggerGameOver('TOWN');
    } else if (numMafia > numTownspeople) {
      triggerGameOver('MAFIA');
    }
  }

  /**
   *
   * @param {string} winner
   * winner is either: 'TOWN', 'MAFIA', or 'JOKER' (or others if we add them)
   */
  function triggerGameOver(winner) {
    setWinner(winner);
    setCurrentPage('GameOver');
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

    checkGameOver();
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
