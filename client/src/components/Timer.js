import React, {useContext} from 'react'
import { GameContext } from '../GameContext'

const Timer = ({ time, setTime, setIsVotingTime, currentVoter }) => {
    const { players, setPlayers } = useContext(GameContext);

    let timerInterval;

    const decrementTimer = () => {
        if (time > 0) {
            setTime(time - 1)
        } else {
            clearInterval(timerInterval)
            players.forEach((player) => {
                if (player.alive && document.getElementById("radio" + player.name).checked) {
                    let newPlayers = [...players];
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

    startSetInterval();

    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default Timer
