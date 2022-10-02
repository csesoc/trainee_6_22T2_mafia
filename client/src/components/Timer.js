import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../GameContext';

const Timer = ({ nextPhase, time, setTime }) => {
  const { players, setPlayers, setCurrPage, votes, setVotes, currentVoter } =
    useContext(GameContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      nextPhase(true);
    }
  }, [time]);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default Timer;
