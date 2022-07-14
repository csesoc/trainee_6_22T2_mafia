import React from 'react';
import {useState, useEffect} from "react";
import PlayerSelectButton from './PlayerSelectButton';
import '../style/TurnSelectScreen.css';

const TurnSelectScreen = (name) => {

    const [liveNames, setLiveNames] = useState([])
    // Gets called when stuff in [] changes
    // If [] is empty, gets called when component is loaded in

    useEffect(() => {
        // Make a copy of the list
        let newLiveNames = [...liveNames];

        newLiveNames.push("Nyah");
        newLiveNames.push("MJ");
        newLiveNames.push("Suri");
        newLiveNames.push("Linda");
        newLiveNames.push("Ahnaf");
        newLiveNames.push("James");
        newLiveNames.push("Blair");
        setLiveNames(newLiveNames);
    }, [])

    return (
        <div className='parent'>
            <div className='parent-box'>
                <h2> Pass the device to the person on your left </h2>
                    <div className='select-box'>
                        <div className='scrollbar'>
                            <div> Select your name!
                            <br></br>   
                            {liveNames.map((name) => <PlayerSelectButton playerName={name}/>)}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )

} 

export default TurnSelectScreen