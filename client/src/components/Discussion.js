import React, { useContext } from 'react';
import CountdownTimer from './DiscussionTimer';
import Graveyard from './Graveyard';
import RoleList from './RoleList';
import { GameContext } from '../GameContext';
import '../style/discussion.css';

const Discussion = () => {
  const { dayNum } = useContext(GameContext);

  return (
    <div className="Discussion">
      <div className="header">
        <div style={{ width: '20%' }}></div>
        <h1 className="title">Day {dayNum}: Discussions</h1>
        <CountdownTimer startTime={80} nextPage={'main'} />
      </div>
      <div className="container" style={{ 'justify-content': 'space-between' }}>
        <RoleList />
        <Graveyard />
      </div>
    </div>
  );
};

export default Discussion;
