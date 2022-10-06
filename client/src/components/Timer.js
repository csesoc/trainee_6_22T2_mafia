import React, { useEffect } from 'react';

const Timer = ({ nextPhase, time, setTime }) => {
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
