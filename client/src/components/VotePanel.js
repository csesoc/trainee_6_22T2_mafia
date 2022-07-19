import React, {useContext} from 'react'
import { GameContext } from '../GameContext'
import '../style/VotePanelStyle.css';

const VotePanel = ({}) => {
    
    const { players, setPlayers } = useContext(GameContext)
    
    let livePlayers = []
    players.forEach((item, index, array) => {
        if(item.alive) {
            livePlayers.push(item)
        }
    });

    return (
        <div className="VotePanel">
            <div className="titleBar">
                <h2>Name</h2>
                <h2>Votes</h2>
                <h2></h2>
            </div>
            <div className="nameList">
                {livePlayers.map((player) => (
                <div className="voteListItem">
                    <div className="nameLabel">
                        <h3>{player.name}</h3>
                    </div>
                    <div className="votesLabel">
                        <h3>{player.currentVotes}</h3>
                    </div>
                        <input type="radio" id={"radio" + player.name} name="votee" value={player.id}></input>
                </div>))}
            </div>
        </div>
    )
}

export default VotePanel
