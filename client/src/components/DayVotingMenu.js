import React, {useContext} from 'react'
import Timer from './Timer'
import VotePanel from './VotePanel'
import Graveyard from './Graveyard'
import '../style/DayVotingMenuStyle.css';
import { GameContext } from '../GameContext'

import { useState, useEffect } from 'react'

const DayVotingMenu = () => {
    const { players, setPlayers } = useContext(GameContext)
    const { votingTime, setVotingTime } = useContext(GameContext)
    const { dayNum, setDayNum } = useContext(GameContext)

    const confirmVote = () => {
        
        players.forEach((player) => {
            if (player.alive && document.getElementById("radio" + player.name).checked) {
                let newPlayers = [...players]
                //console.log("incrementing " + player.name + " from " + player.currentVotes + " to " + (player.currentVotes + 1))
                newPlayers[player.id].currentVotes++
                setPlayers(newPlayers)
            }
        }) 
    }
    
    return (
        <div className="dayVoting">
            <div className="header">
                <h1 className="title">Day {dayNum}: Voting</h1>
                <Timer/>
            </div>
            <h3 className="instructions">Vote for a person to kill, voting ends in XX seconds.</h3>
            <div className="actionPanel">
                <VotePanel/>
                <Graveyard/>
            </div>
            <button className="confirmButton" onClick={confirmVote}>Confirm</button>
        </div>
    )
}

export default DayVotingMenu