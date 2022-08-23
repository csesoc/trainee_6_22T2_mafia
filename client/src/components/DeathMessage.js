import React, { useContext } from 'react';
import '../style/deathMessage.css';
import '../style/button.css';
import { GameContext } from '../GameContext';

const DeathMessage = () => {
  const {
    players,
    setPlayers,
    dayNum,
    setCurrPage,
    currentPage,
    votes,
    setVotes,
  } = useContext(GameContext);

  let deadPlayer = {};

  const calcDeath = () => {
    console.log('calcDeath called');
    let highestKillVotes = { votes: 0, name: '', role: '' };
    let highestSaveVotes = { votes: 0, name: '' };

    players.forEach((player) =>
      updateHighest(player, highestKillVotes, highestSaveVotes)
    );

    console.log('highestKillVotes is ' + highestKillVotes.name);

    if (currentPage === 'nightVoting') {
      //night time: save and investigate votes count.
      if (highestKillVotes.name === highestSaveVotes.name) {
        return 'Noone...';
      }
    }

    let newPlayers = [];
    players.forEach((player) => {
      if (player.name === highestKillVotes.name) {
        deadPlayer = player;
        deadPlayer.alive = false;
        newPlayers.push(deadPlayer);
      } else {
        newPlayers.push(player);
      }
    });
    console.log('deadPlayer is ' + deadPlayer.name);
    setPlayers(newPlayers);

    return deadPlayer.name;
  };

  const updateHighest = (player, highestKillVotes, highestSaveVotes) => {
    if (votes.kill[player.id] > highestKillVotes.votes) {
      highestKillVotes = {
        votes: votes.kill.player,
        name: player.name,
      };
    }
    if (votes.save[player.id] > highestSaveVotes.votes) {
      highestSaveVotes = {
        votes: votes.save.player,
        name: player.name,
      };
    }
  };

  const nextPhase = () => {
    if (currentPage === 'dayVoting') {
      setCurrPage('nightMessage');
      console.log("current page set to 'nightMessage'");
    } else {
      setCurrPage('discussion');
      console.log("current page set to 'discussion'");
    }

    resetVotes();
  };

  const resetVotes = () => {
    let newVotes = {
      ...votes,
    };
    //TODO I think i need to use votes as an array rather than object so that i can use player's id as indicies.
    players.forEach((player) => (newVotes.kill[player.id] = 0));
    players.forEach((player) => (newVotes.save[player.id] = 0));

    setVotes(newVotes);
  };

  calcDeath();

  return (
    <div className="deathMessage">
      <h1 className="dayHeader">
        {currentPage === 'dayVoting' ? 'Day' : 'Night'}
        {dayNum}
      </h1>
      <h1 className="deathName">DEATH: {deadPlayer.name}</h1>
      <h2 className="deathDescription">
        {currentPage === 'dayVoting'
          ? deadPlayer.name + ' was a ' + deadPlayer.role
          : ''}{' '}
        was
      </h2>
      <button className="button" onClick={nextPhase}>
        lol
      </button>
    </div>
  );
};

export default DeathMessage;
