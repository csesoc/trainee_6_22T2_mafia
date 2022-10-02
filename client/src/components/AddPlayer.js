import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../GameContext';
import DisplayPlayer from './DisplayPlayer';

const AddPlayer = () => {
  const { players, setPlayers, generatePlayerId } = useContext(GameContext);

  const [currPlayerName, setCurrPlayerName] = useState('');

  const updateCurrPlayerName = (e) => {
    setCurrPlayerName(e.target.value);
  };

  const [invalidNickError, setInvalidNickError] = useState(false);

  const invalidUsername = () =>
    players.filter((player) => player.name === currPlayerName).length > 0;

  useEffect(() => {
    setInvalidNickError(invalidUsername());
  }, [currPlayerName, players]);

  const addPlayer = (e) => {
    e.preventDefault();
    if (currPlayerName.trim().length === 0 || invalidUsername())
      return setInvalidNickError(true);
    setPlayers((players) => [
      ...players,
      {
        id: generatePlayerId(),
        name: currPlayerName,
        alive: true,
        role: '',
        hasVoted: false,
        currentVotes: 0,
      },
    ]);
    setCurrPlayerName('');
  };

  return (
    <div>
      <div>
        {players.map((player) => (
          <DisplayPlayer name={player.name} id={player.id} key={player.id} />
        ))}
      </div>
      <form onSubmit={addPlayer}>
        <input
          type="text"
          value={currPlayerName}
          onChange={updateCurrPlayerName}
        />
        <button>Add</button>
      </form>
      {invalidNickError && 'Invalid username!'}
    </div>
  );
};

export default AddPlayer;
