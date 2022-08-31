import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from '../GameContext';

const CountdownTimer = ({ startTime, nextPage }) => {
  const { setCurrentPage } = useContext(GameContext);
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time <= 0) setCurrentPage(nextPage);
  }, [time]);

  const displayTime = () => {
    return (
      (time >= 60 ? Math.floor(time / 60).toString() + ' min ' : '') +
      (time % 60).toString() +
      ' seconds '
    );
  };

  return (
    <div>
      <h1>{displayTime()}</h1>
    </div>
  );
};

export default CountdownTimer;
