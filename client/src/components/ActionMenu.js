import React, {useState, useEffect} from 'react';
import PlayerSelectMenu from './PlayerSelectMenu';
import { GameContext } from '../GameContext';
import { useContext } from 'react';

const ActionMenu = () => {
    const { setCurrentPage, players } = useContext(GameContext);

    // player is alive 
    // every time you press a player, add them to []
    // 

    const func = (name) => {
        console.log("ACTION" + name)
        // setCurrPage("main")
    }

    return (
        <div>
            <PlayerSelectMenu title="Select another player" func={func}/>
        </div>
    )
}

export default ActionMenu;
