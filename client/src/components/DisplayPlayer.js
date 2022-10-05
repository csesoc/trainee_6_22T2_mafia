import { useContext, useState } from 'react';
import { GameContext } from '../GameContext';
import '../style/DisplayPlayer.css';

const DisplayPlayer = ({ name, id }) => {
  const { setPlayers } = useContext(GameContext);

  const resetNameErrors = () => ({
    emptyName: false,
    duplicateName: false,
  });
  const [nameErrors, setNameErrors] = useState(resetNameErrors());

  // ERROR MESSAGES:
  // No empty player name
  // No whitespace
  // No duplicates
  const updatePlayerName = (e) => {
    const newName = e.target.value;
    const newNameErrors = resetNameErrors();
    if (newName.trim().length === 0) newNameErrors['emptyName'] = true;
    setPlayers((players) => {
      const newPlayers = [...players];
      newPlayers.forEach((player) => {
        if (player.id === id) player.name = newName;
        else if (player.name === newName && !newNameErrors['emptyName'])
          newNameErrors['duplicateName'] = true;
      });
      return newPlayers;
    });
    setNameErrors(newNameErrors);
  };

  const removePlayer = () => {
    setPlayers((players) => players.filter((player) => player.name !== name));
  };

  return (
    <div className="DisplayPlayer">
      <div className="DisplayNameContainer">
        <input
          type="text"
          className="DisplayName"
          value={name}
          onChange={updatePlayerName}
        />
        {/* Set an onFocus for this ^^ div */}
        <p>
          {nameErrors['emptyName'] && 'Username cannot be empty!'}
          {nameErrors['duplicateName'] && 'Username cannot be duplicate!'}
        </p>
      </div>
      <button onClick={removePlayer}>X</button>
    </div>
  );
};

export default DisplayPlayer;
