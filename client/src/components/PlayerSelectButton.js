import React from "react";
import {useState, useEffect} from "react";

const PlayerSelectButton = ({playerName, func}) => {
    const [name, setName] = useState([])

    useEffect(() => {
        setName(playerName);
    }, [])

  //  return <button className = "name-button" onClick={func}>{name}</button>
    return <button className = "name-button" onClick={() => func(name)}>{name}</button>
}

export default PlayerSelectButton