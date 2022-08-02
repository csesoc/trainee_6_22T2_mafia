import React from 'react';
import React, { useContext, useRef} from 'react';
import { GameContext } from '../GameContext';
import '../style/AddPlayer.css';

const AddPlayer = () => {
<<<<<<< Updated upstream
	return (
		<div>
			Add some players lol
		</div>
	);
}
=======
  const { players, setPlayers } = useContext(GameContext);
  const toAdd = useRef(null);

  const handleRemoval = (e) => {
    e.preventDefault();
    let playerid = e.target.getAttribute("playerid");
    
    let newPlayers = [...players];
    setPlayers( newPlayers.filter ( currentPlayers => {
      return currentPlayers.name !== playerid;
    }));
  }

  const handleAdding = (e) => {
    e.preventDefault();
    
    if (toAdd.current.value === '') {

    }
    let newPlayers = [...players];
    newPlayers.push( {
      name: toAdd.current.value,
      alive: true,
      role: 'barista',
      id: 666,
      hasVoted: false,
      currentVotes: 0,
    });
    setPlayers(newPlayers);

    e.target.reset();
  }

  return (
    <div>
      <div className='main-heading'>
        Enter the names of players below!
      </div>
      <form className='inputArea' onSubmit={ handleAdding }>
        <input placeholder='Enter name' ref={toAdd}/>
        <button type='submit' className='addButton'>Add</button>
      </form> 
      <div>
        <br/>
        Current Players:
        <div>
          { players.map((player) => (
            <div className='playersList'>
              { player.name }: { player.role }     
              <button onClick={ handleRemoval } playerid={ player.name }>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </  div>
  );
};
>>>>>>> Stashed changes

export default AddPlayer;
