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
    votes,
    setVotes,
  } = useContext(GameContext);

  const [time, setTime] = useState(votingTime);

  const confirmVote = () => {
    if (currentVoter.hasVoted) {
      goToNextVoter();
      return;
    }

    let voted = false;
    players.forEach((player) => {
      if (
        player.alive &&
        document.getElementById('radio' + player.name).checked
      ) {
        let newPlayers = [...players];
        newPlayers[currentVoter.id].hasVoted = true;
        setPlayers(newPlayers);

        let newVotes = {
          kill: [...votes.kill],
          save: [...votes.save],
        };
        newVotes.kill[player.id]++;
        setVotes(newVotes);
        voted = true;
      }
    });

    if (voted || time <= 0) {
      goToNextVoter();
    }
  };

  function goToNextVoter() {
    let moreToVote = false;
    players.forEach((player) => {
      if (player.hasVoted === false) {
        moreToVote = true;
      }
    });

    if (moreToVote) {
      setCurrentPage('SelectVoter');
    } else {
      setCurrentPage('DeathMessage');
    }
  }

  return (
    <div className="dayVoting">
      <div className="header">
        <h1 className="title">Day {dayNum}: Voting</h1>
        <Timer nextPhase={confirmVote} time={time} setTime={setTime} />
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
