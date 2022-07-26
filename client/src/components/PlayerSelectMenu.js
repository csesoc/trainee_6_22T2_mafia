import React from 'react';
import {useState, useEffect} from "react";
import PlayerSelectButton from './PlayerSelectButton';
import '../style/TurnSelectScreen.css';

const PlayerSelectMenu = ({title, func}) => {
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
       // func()
       console.log(func);
    }, [])

    return (
        <div className='parent'>
            <div className='parent-box'>
                <h2> Action Menu </h2>
                    <div className='select-box'>
                        <div className='scrollbar'>
                            <div> {title}
                            <br></br>   
                            {liveNames.map((name) => <PlayerSelectButton playerName={name} func={func}/>)}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PlayerSelectMenu