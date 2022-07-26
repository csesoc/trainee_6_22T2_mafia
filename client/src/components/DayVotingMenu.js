import React, { useContext, useState } from 'react';
import Timer from './Timer';
import VotePanel from './VotePanel';
import Graveyard from './Graveyard';
import '../style/DayVotingMenuStyle.css';
import { GameContext } from '../GameContext';

const DayVotingMenu = () => {
  const {
    players,
    setPlayers,
    dayNum,
    votingTime,
    currentVoter,
    setCurrentPage,
  } = useContext(GameContext);
  const [time, setTime] = useState(votingTime);

  const confirmVote = () => {
    if (currentVoter.hasVoted) {
      setCurrentPage('main');
      return;
    }

    let voted = false;
    players.forEach((player) => {
      if (
        player.alive &&
        document.getElementById('radio' + player.name).checked
      ) {
        let newPlayers = [...players];
        newPlayers[player.id].currentVotes++;
        newPlayers[currentVoter.id].hasVoted = true;
        setPlayers(newPlayers);
        voted = true;
      }
    });

    if (voted) {
      setCurrentPage('main');
    }
  };

  return (
    <div className="dayVoting">
      <div className="header">
        <h1 className="title">Day {dayNum}: Voting</h1>
        <Timer time={time} setTime={setTime} currentVoter={currentVoter} />
      </div>
      <h3 className="instructions">
        Vote for a person to kill, voting ends in {time} seconds.
      </h3>
      <div className="actionPanel">
        <VotePanel />
        <Graveyard />
      </div>
      <button className="confirmButton" onClick={confirmVote}>
        Confirm
      </button>
    </div>
  );
};

export default DayVotingMenu;
