import React from 'react'
import Timer from './Timer'
import VotePanel from './VotePanel'
import Graveyard from './Graveyard'

import { useState } from 'react'

const DayVotingMenu = ( {live_names, live_IDs, dead_names, voterID, dayNum, voteTime}) => {
    
    let currentTime = 0
    
    return (
        <div className="day_voting">
            <div className="header">
                <h1 className="title">Day {dayNum}: Voting</h1>
                <Timer voteTime={voteTime}/>
            </div>
            <h3 className="instructions">Vote for a person to kill, voting ends in {voteTime - currentTime} seconds.</h3>
            <div className="action_panel">
                <VotePanel names={live_names} IDs={live_IDs} voterID={voterID}/>
                <Graveyard names={dead_names}/>
            </div>
            <button>Confirm</button>
        </div>
    )
}

export default DayVotingMenu