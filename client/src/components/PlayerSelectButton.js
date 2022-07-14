import React from "react";
import {useState, useEffect} from "react";

const PlayerSelectButton = ({playerName}) => {
    const [name, setName] = useState([])

    useEffect(() => {
        setName(playerName);
    }, [])

    const selectName = () => {
        console.log(name)
    }
    return <button className = "name-button" onClick={(e) => selectName()}>{name}</button>
}

export default PlayerSelectButton