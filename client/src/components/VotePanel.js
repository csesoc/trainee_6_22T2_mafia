import '../style/VotePanelStyle.css';

const VotePanel = ({}) => {
    
    let tempPlayerNames = ["Blair", "Ahnaf", "Nyah", "MJ", "Linda"]

    return (
        <div className="VotePanel">
            <div classname="titleBar">
                <h2>Name</h2>
            </div>
            <div className="nameList">
                {tempPlayerNames.map((pName) => (<div className="voteListItem">
                    <div className="label"><h3>{pName}</h3></div>
                    <input type="radio" id={pName} name="votee" value={pName}></input>
                </div>))}
            </div>
        </div>
    )
}

export default VotePanel