import React, {useContext} from 'react'
import Timer from './Timer'
import VotePanel from './VotePanel'
import Graveyard from './Graveyard'
import '../style/DayVotingMenuStyle.css';
import { GameContext } from '../GameContext'

const DayVotingMenu = ({ currentVoter }) => {
    const { players, setPlayers } = useContext(GameContext)
    const { dayNum, setDayNum } = useContext(GameContext)

    const confirmVote = () => {
        
        if (currentVoter.hasVoted) {
            return
        }

        players.forEach((player) => {
            if (player.alive && document.getElementById("radio" + player.name).checked) {
                let newPlayers = [...players]
                //console.log("incrementing " + player.name + " from " + player.currentVotes + " to " + (player.currentVotes + 1))
                newPlayers[player.id].currentVotes++
                newPlayers[currentVoter.id].hasVoted = true
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
