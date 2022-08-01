import React from 'react';

const DisplayPlayer = ({ player }) => {
  return (
    <div>
      playerID: {player.id}/ name: {player.name}/ role: {player.role}
    </div>
  );
};

export default DisplayPlayer;
