import React from 'react';
import {useState, useEffect} from "react";

const TurnSelectScreen = () => {
    const [liveNames, setLiveNames] = useState([])
    // Gets called when stuff in [] changes
    // If [] is empty, gets called when component is loaded in
    useEffect(() => {
        // Make a copy of the list
        let newLiveNames = [...liveNames];

        newLiveNames.push("bob");
        newLiveNames.push("john");
        setLiveNames(newLiveNames);
    }, [])

    // TOMORROW 9PM DISCORD 30 MIN GET STARTED
    return (
        <div>
            {liveNames.map((name) => <button className="button" onClick={}>{name}</button>)}
            {/* <li>

            </li>
            <button className="button" onClick={}> </button> */}
            {/* GOAL IS TO MAKE EACH NAME A CLICKABLE BUTTON 
            WHEN YOU CLICK IT, IT WILL CONSOLE LOG THE NAME
             */}
            {/* {liveNames.map((name) => <PlayerSelectButton name={name}/>)} */}
        </div>
    )

} 

export default TurnSelectScreen