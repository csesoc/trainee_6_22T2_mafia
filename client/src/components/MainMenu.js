import React from 'react';
import Tabs from './Tabs';
import '../style/MainMenu.css';
import '../style/button.css';

const MainMenu = () => {
  return (
    <div className="parent">
      <div className="parent-box">
        <div>
          <h1>Welcome to Mafia</h1>
        </div>
        <div>
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
