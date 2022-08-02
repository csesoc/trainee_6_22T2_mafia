import React from 'react';
import {useState, useEffect} from "react";
import PlayerSelectButton from './PlayerSelectButton';
import PlayerSelectMenu from './PlayerSelectMenu';
import '../style/TurnSelectScreen.css';

const TurnSelectScreen = () => {
    const func = (name) => {
        console.log(name)
    }

    return (
        <div>
            <PlayerSelectMenu title="Select which player you are"func={func} />
        </div>
    )
}

export default TurnSelectScreen