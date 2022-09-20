import React, { createContext, useState } from 'react';

/* Roles:
  - name: string
  - help: short role description
  - count: number of that role
  - isEvil: whether the role is 'evil' (evil roles are the roles that win if mafia win)
    */
const defaultRoles = [
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
];

export const GameContext = createContext({
  roles: [...defaultRoles],
  setRoles: () => {},
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
  const [roles, setRoles] = useState([...defaultRoles]);
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
    */
  const [players, setPlayers] = useState([
    {
      name: 'James',
      alive: true,
      role: 'none',
      id: 0,
      hasVoted: false,
    },
    {
      name: 'MJ',
      alive: false,
      role: 'mafia',
      id: 1,
      hasVoted: true,
    },
    {
      name: 'Nyah',
      alive: true,
      role: 'doctor',
      id: 2,
      hasVoted: true,
    },
    {
      name: 'Ahnaf',
      alive: true,
      role: 'none',
      id: 3,
      hasVoted: true,
    },
    {
      name: 'Suri',
      alive: true,
      role: 'none',
      id: 4,
      hasVoted: true,
    },
    {
      name: 'Linda',
      alive: true,
      role: 'none',
      id: 5,
      hasVoted: true,
    },
    {
      name: 'Blair',
      alive: true,
      role: 'none',
      id: 6,
      hasVoted: true,
    },
  ]);
  const [votes, setVotes] = useState({
    //arrays indexed by by player id
    kill: [0, 0, 3, 2, 1, 2, 0],
    save: [3, 0, 1, 0, 2, 0, 0],
  });

  const [numMafia, setNumMafia] = useState(0);
  const [numTownspeople, setNumTownspeople] = useState(0);
  const [votingTime, setVotingTime] = useState(10);
  const [dayNum, setDayNum] = useState(0);
  const [isDay, setIsDay] = useState(false);
  const [currentPage, setCurrentPage] = useState('DayVoting'); //options: 'MainMenu', 'DayVoting', 'NightVoting', 'DeathMessage', 'SelectVoter', 'NightMessage', 'Discussion'
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
    votes,
    setVotes,
    isDay,
    setIsDay,
  };

  return (
    <GameContext.Provider value={initialContext}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
