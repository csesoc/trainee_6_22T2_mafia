import React, {useContext, useState} from 'react'
import Timer from './Timer'
import VotePanel from './VotePanel'
import Graveyard from './Graveyard'
import '../style/DayVotingMenuStyle.css';
import { GameContext } from '../GameContext'

const DayVotingMenu = ({ currentVoter, setIsVotingTime }) => {
    const { players, setPlayers, 
            dayNum, 
            votingTime } = useContext(GameContext)
    const [time, setTime] = useState(votingTime)

    let timerInterval;

    const decrementTimer = () => {
        if (time > 0) {
            setTime(time - 1)
        } else {
            clearInterval(timerInterval)
            players.forEach((player) => {
                if (player.alive && document.getElementById("radio" + player.name).checked) {
                    let newPlayers = [...players];
                    //console.log("incrementing " + player.name + " from " + player.currentVotes + " to " + (player.currentVotes + 1))
                    newPlayers[player.id].currentVotes++;
                    newPlayers[currentVoter.id].hasVoted = true;
                    setPlayers(newPlayers);
                }
            }) 
            
            setIsVotingTime(false)
        }
    }
    
    const startSetInterval = () => {
        timerInterval = setInterval(decrementTimer, 1000);
    }

    const confirmVote = () => {
        
        if (currentVoter.hasVoted) {
            setIsVotingTime(false)
            return
        }

        let voted = false;
        players.forEach((player) => {
            if (player.alive && document.getElementById("radio" + player.name).checked) {
                let newPlayers = [...players];
                //console.log("incrementing " + player.name + " from " + player.currentVotes + " to " + (player.currentVotes + 1))
                newPlayers[player.id].currentVotes++;
                newPlayers[currentVoter.id].hasVoted = true;
                setPlayers(newPlayers);
                voted = true;
            }
        }) 
        
        if (voted) {
            setIsVotingTime(false);
        }
    }

    startSetInterval();
    
    return (
        <div className="dayVoting">
            <div className="header">
                <h1 className="title">Day {dayNum}: Voting</h1>
                <Timer time={time} setTimer={setTime}/>
            </div>
            <h3 className="instructions">Vote for a person to kill, voting ends in {time} seconds.</h3>
            <div className="actionPanel">
                <VotePanel/>
                <Graveyard/>
            </div>
            <button className="confirmButton" onClick={confirmVote}>Confirm</button>
        </div>
    )
}

export default DayVotingMenu
