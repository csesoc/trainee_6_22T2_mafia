import React from 'react';
import Box from "./mainBoxComponent";
import styles from '../style/mainBox.module.css';
import '../style/button.css'

export default function MainMenu() {
  return (
    <div className={styles.parent}>
      <Box className={styles.parentBox}>
        <Box>
          <h1>Welcome to Mafia</h1>
        </Box>
        <Box className={styles.childTabs}>
          <div className={styles.childTabs}>
            <button className='button'>Add player names</button>
            <button className='button'>Select Roles </button>
          </div>
        </Box>
        <Box className={styles.playerSelect}>
          Select players
          <Box>

          </Box>
        </Box>
      </Box>
    </div>
  );
}