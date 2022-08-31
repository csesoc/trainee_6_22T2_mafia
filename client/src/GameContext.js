import React, { createContext, useState } from 'react';

export const GameContext = createContext({
  players: [],
  setPlayers: () => {},
  numMafia: 0,
  setNumMafia: () => {},
  numTownspeople: 0,
  setNumTownspeople: () => {},
  votingTime: 10,
  setVotingTime: () => {},
  dayNum: 0,
  setDayNum: () => {},
  currentPage: 'main',
  setCurrentPage: () => {},
  currentVoter: 0,
  setCurrentVoter: () => {},
});

const GameContextProvider = ({ children }) => {
  /* Roles:
  - name: string
  - help: short role description
  - count: number of that role
  - isEvil: whether the role is 'evil' (evil roles are the roles that win if mafia win)
   */
  const [roles, setRoles] = useState([
    {
      roleId: 0,
      name: 'Mafia',
      help: 'Selects a player to kill every night',
      count: 0,
      isEvil: true,
    },
    {
      roleId: 1,
      name: 'Doctor',
      help: 'Selects a player to save every night',
      count: 0,
      isEvil: false,
    },
    {
      roleId: 2,
      name: 'Barista',
      help: 'Makes coffee',
      count: 0,
      isEvil: false,
    },
  ]);
  /* player fields: 
    - name (string)
    - alive (bool)
    - role (string) options:
      - barista
      - mafia
      - mafioso??
      - doctor??
      - detective??
      - sheriff??
      - ??
    - id (int) (index in array for easy retrieval)
    - hasVoted: whether the player has voted in the current phase of the game, needs to be reset after/before each new phase
    - currentVotes: how many votes there are against this player in the current phase of the game, needs to be reset after/before each new phase
    */
  const [players, setPlayers] = useState([
    {
      name: 'James',
      alive: true,
      role: 'none',
      id: 0,
      hasVoted: false,
      currentVotes: 0,
    },
    {
      name: 'MJ',
      alive: false,
      role: 'none',
      id: 1,
      hasVoted: false,
      currentVotes: 1,
    },
    {
      name: 'Nyah',
      alive: false,
      role: 'none',
      id: 2,
      hasVoted: false,
      currentVotes: 0,
    },
    {
      name: 'Ahnaf',
      alive: true,
      role: 'none',
      id: 3,
      hasVoted: true,
      currentVotes: 0,
    },
    {
      name: 'Suri',
      alive: true,
      role: 'none',
      id: 4,
      hasVoted: true,
      currentVotes: 0,
    },
    {
      name: 'Linda',
      alive: true,
      role: 'none',
      id: 5,
      hasVoted: false,
      currentVotes: 0,
    },
    {
      name: 'Blair',
      alive: true,
      role: 'none',
      id: 6,
      hasVoted: false,
      currentVotes: 0,
    },
  ]);
  const [numMafia, setNumMafia] = useState(0);
  const [numTownspeople, setNumTownspeople] = useState(0);
  const [votingTime, setVotingTime] = useState(10);
  const [dayNum, setDayNum] = useState(0);
  // change back to 'main' when pushing
  const [currentPage, setCurrentPage] = useState('discussion'); //options: 'main', 'voting', ...
  const [currentVoter, setCurrentVoter] = useState(players[0]);

  const initialContext = {
    roles,
    setRoles,
    players,
    setPlayers,
    numMafia,
    setNumMafia,
    numTownspeople,
    setNumTownspeople,
    votingTime,
    setVotingTime,
    dayNum,
    setDayNum,
    currentPage,
    setCurrentPage,
    currentVoter,
    setCurrentVoter,
  };

  return (
    <GameContext.Provider value={initialContext}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
