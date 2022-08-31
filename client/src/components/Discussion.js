import React, { useContext, useState } from 'react';
import CountdownTimer from './DiscussionTimer';
import { GameContext } from '../GameContext';
import '../style/discussion.css';

const Discussion = () => {
  const { dayNum } = useContext(GameContext);
  const [time, setTime] = useState(10);
  return (
    <div className="Discussion">
      <div className="header">
        <h1 className="title">Day {dayNum}: Discussions</h1>
        <CountdownTimer time={time} setTime={setTime} />
      </div>
    </div>
  );
};

export default Discussion;
