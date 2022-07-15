import { GameContext } from '../GameContext'
import '../style/Graveyard.css';

const Graveyard = ( {} ) => {
    let tempDeadPlayers = ["James", "Suri"]

    return (
        <div className="graveyard">
            <h2 className="title">Graveyard</h2>
            <div className="graveyardScroll">
                {tempDeadPlayers.map((pName) => (<div className="graveyardListItem">
                        <h3>{pName}</h3>
                </div>))}
            </div>
        </div>
    )
}

export default Graveyard