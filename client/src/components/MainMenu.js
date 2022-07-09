import React from 'react';
import '../style/MainMenu.css';
import '../style/button.css'

const MainMenu = () => {
  return (
    <div className='parent'>
      <div className='parent-box'>
        <div>
          <h1>Welcome to Mafia</h1>
        </div>
        <div className='child-tabs'>
          <button className='button'>Add player names</button>
          <button className='button'>Select Roles </button>
        </div>
        <div className='player-select'>
          Select players
        </div>
      </div>
    </div>
  );
}

export default MainMenu;