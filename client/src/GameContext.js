import React, { createContext, useState, setState } from 'react';

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
    name: 'Detective',
    help: 'Investigates whether players are evil',
    count: 0,
    isEvil: false,
  },
  {
    roleId: 3,
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
  generatePlayerId: () => {},
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
  winner: {},
  setWinner: () => {},
  mafiaRoleList: [],
  townRoleList: [],
});

const GameContextProvider = ({ children }) => {
  const [roles, setRoles] = useState([...defaultRoles]);
  /* player fields: 
    - name (string)
    - alive (bool)
    - role (string) options:
      - ''
      - mafia
      - barista
      - doctor
      - detective
      - mafioso??
      - sheriff??
    - id (int)
    - hasVoted (bool)
    - currentVotes (int)
    */
  const [players, setPlayers] = useState([]);
  const [playerId, setPlayerId] = useState(0);
  const generatePlayerId = () => {
    const newPlayerId = playerId + 1;
    setPlayerId(newPlayerId);
    // Make player ID's end in a 0 in case we need error checking:
    return newPlayerId * 10;
  };

  const [votes, setVotes] = useState({
    //arrays indexed by by player id
    kill: [0, 0, 0, 0, 0, 0, 0],
    save: [3, 0, 1, 0, 2, 0, 0],
  });
  const [numMafia, setNumMafia] = useState(0);
  const [numTownspeople, setNumTownspeople] = useState(0);
  const [votingTime, setVotingTime] = useState(10);
  const [dayNum, setDayNum] = useState(0);
  const [isDay, setIsDay] = useState(false);
  const [currentPage, setCurrentPage] = useState('MainMenu'); //options: 'MainMenu', 'DayVoting', 'NightVoting', 'DeathMessage', 'SelectVoter', 'NightMessage', 'Discussion'
  const [currentVoter, setCurrentVoter] = useState(players[0]);
  const [winner, setWinner] = useState({}); //if no winner, empty string. Otherwise 'MAFIA', 'TOWN', 'JOKER'
  const mafiaRoleList = ['mafia', 'godfather'];
  const townRoleList = ['none', 'doctor', 'investigator', 'joker'];

  const initialContext = {
    roles,
    setRoles,
    players,
    setPlayers,
    generatePlayerId,
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
    winner,
    setWinner,
    mafiaRoleList,
    townRoleList,
  };

  return (
    <GameContext.Provider value={initialContext}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
