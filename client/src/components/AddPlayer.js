import React, { useContext, useRef} from 'react';
import { GameContext } from '../GameContext';
import '../style/AddPlayer.css';

const AddPlayer = () => {

  const { players, setPlayers } = useContext(GameContext);
  const toAdd = useRef(null);

  const handleRemoval = (e, targetName) => {
    e.preventDefault();

    let newPlayers = [...players];
    setPlayers( newPlayers.filter ( currentPlayers => {
      return currentPlayers.name !== targetName;
    }));
  }

  const handleAdding = (e) => {
    e.preventDefault();
    
    if (toAdd.current.value === '') {
      return
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
              <button onClick={ (e) => handleRemoval(e, player.name)  } >Remove</button>
            </div>
          ))}
        </div>
      </div>
    </  div>
  );
};

export default AddPlayer;
