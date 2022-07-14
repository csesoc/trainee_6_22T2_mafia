import React from "react";
import {useState, useEffect} from "react";

const ActionSelectButton = ({playerName}) => {
    const [name, setName] = useState([])

    useEffect(() => {
        setName(playerName);
    }, [])

    const selectName = () => {
        console.log("ACTION" + name)
    }
    return <button className = "name-button" onClick={(e) => selectName()}>{name}</button>
}

export default ActionSelectButton