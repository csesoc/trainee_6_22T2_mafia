import React, {useState, useEffect} from 'react';
import PlayerSelectMenu from './PlayerSelectMenu';

const ActionMenu = () => {
    const func = (name) => {
        console.log("ACTION" + name)
    }

    return (
        <div>
            <PlayerSelectMenu title="Select another player" func={func}/>
        </div>
    )
}

export default ActionMenu;
