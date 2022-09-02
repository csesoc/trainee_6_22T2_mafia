import React, { useContext } from 'react';
import { GameContext } from '../GameContext';
import '../style/RoleList.css';
import AliveRole from './AliveRole';

const RoleList = () => {
  const { players } = useContext(GameContext);
  const aliveRole = [];
  for (const player of players) {
    if (player.alive) {
      aliveRole.push(player.role);
    }
  }

  return (
    <div className="RoleList">
      <h2>Role List</h2>
      <div className="RoleListScroll">
        {aliveRole.map((role) => (
          <AliveRole RoleName={role} />
        ))}
      </div>
    </div>
  );
};

export default RoleList;
